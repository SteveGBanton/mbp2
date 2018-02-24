import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import ShortLinks from '../ShortLinks';

Meteor.publish('shortLinks', function shortLinks() {
  return ShortLinks.find({ owner: this.userId });
});

Meteor.publish('shortLinks.view', function shortLinksView(shortLink) {
  check(shortLink, String);
  return ShortLinks.find({ shortLink: shortLink });
});
