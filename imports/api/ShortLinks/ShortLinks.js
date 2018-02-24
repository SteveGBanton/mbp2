/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const ShortLinks = new Mongo.Collection('ShortLinks');

ShortLinks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

ShortLinks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

ShortLinks.schema = new SimpleSchema({
  owner: {
    type: String,
    label: 'The ID of the user this document belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this document was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  clicks: {
    type: Number,
    label: 'Total number of times shortlink has been visited.',
  },
  url: {
    type: String,
    label: 'The forwarding url.',
  },
  shortLink: {
    type: String,
    label: 'The shortlink.',
  },
});

ShortLinks.attachSchema(ShortLinks.schema);

export default ShortLinks;
