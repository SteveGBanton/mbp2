import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ServiceConfiguration } from 'meteor/service-configuration';
import rateLimit from '../../../modules/rate-limit';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const oauthVerifyConfigurationMethod = new ValidatedMethod({
  name: 'oauth.verifyConfiguration',
  validate: new SimpleSchema({
    services: { type: [String] }
  }).validator(),
  run({services}) {
    try {
      const verifiedServices = [];
      services.forEach((service) => {
        if (ServiceConfiguration.configurations.findOne({ service })) {
          verifiedServices.push(service);
        }
      });
      return verifiedServices.sort();
    } catch (exception) {
      throw new Meteor.Error('500', exception);
    }
  }
})

rateLimit({
  methods: [
    'oauth.verifyConfiguration',
  ],
  limit: 5,
  timeRange: 1000,
});
