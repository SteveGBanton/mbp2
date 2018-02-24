import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Clicks from './Clicks';
import ShortLinks from '../ShortLinks/ShortLinks';
import rateLimit from '../../modules/rate-limit';

const clicksInsert = new ValidatedMethod({
  name: 'clicks.insert',
  validate: new SimpleSchema({
    linkId: { type: String },
  }).validator(),
  run({ linkId }) {
    try {
      const shortLinkDoc = ShortLinks.findOne(linkId);
      const connectionData = this.connection;

      // Add click record document to DB
      const clickData = {
        linkId,
        owner: shortLinkDoc.owner,
        ipAddress: connectionData.httpHeaders['x-forwarded-for'], // Attempt to get true IP through proxy/load balancer
        deviceType: connectionData.httpHeaders['user-agent'],
        shortLink: shortLinkDoc.shortLink,
        url: shortLinkDoc.url,
      };
      Clicks.insert({ ...clickData });

      // Update ShortLink.clicks for denormalization of click count
      if (shortLinkDoc) {
        const setClicks = {
          clicks: shortLinkDoc.clicks + 1,
        };
        return ShortLinks.update(linkId, { $set: setClicks });
      }
      throw new Meteor.Error('500', 'no shortlink found');
    } catch (exception) {
      throw new Meteor.Error('500', exception);
    }
  },
});

rateLimit({
  methods: [
    'clicks.insert',
  ],
  limit: 1,
  timeRange: 2000,
});

export default clicksInsert;
