/* eslint-disable babel/no-invalid-this */

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import ShortLinks from '../ShortLinks';

Meteor.publish('shortLinks', function shortLinks() {
  return ShortLinks.find({ owner: this.userId });
});

Meteor.publish('shortLinks.view', (shortLink) => {
  check(shortLink, String);
  return ShortLinks.find({ shortLink });
});
