/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Clicks = new Mongo.Collection('Clicks');

Clicks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Clicks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Clicks.schema = new SimpleSchema({
  owner: {
    type: String,
    label: 'The ID of the user who owns the shortlink or anon if no owner specified.',
  },
  dateClicked: {
    type: String,
    label: 'The date this document was created / when link was clicked.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  ipAddress: {
    type: String,
    label: 'The IP address of the visitor.',
  },
  deviceType: {
    type: String,
    label: 'The device type of the visitor.',
  },
  shortLink: {
    type: String,
    label: 'The short link string',
  },
  url: {
    type: String,
    label: 'The full link as entered by user.w',
  },
  linkId: {
    type: String,
    label: 'The mongo _id of the ShortLink from the ShortLinks collection',
  },
});

Clicks.attachSchema(Clicks.schema);

export default Clicks;
