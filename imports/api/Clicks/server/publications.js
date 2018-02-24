import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import Clicks from '../Clicks';

Meteor.publish('clicks.userTotalClickCount', () => Clicks.find({ owner: this.userId }).count());

Meteor.publish('clicks.oneLinkList', (linkId, dateFrom, dateTo) => {
  check(linkId, String);
  check(dateFrom, Match.Maybe(String));
  check(dateTo, Match.Maybe(String));

  // Set by default 30 days before current date if no input
  const dateFromISO = (dateFrom) ?
    (new Date(dateFrom).toISOString())
    :
    (new Date((new Date().setDate(new Date().getDate() - 30))).toISOString());

  // Set by default today's date if no input
  const dateToISO = (dateTo) ? (new Date(dateTo).toISOString()) : (new Date().toISOString());

  const cursor = (linkId !== 'noid') ?
    Clicks.find({
      linkId,
      dateClicked: {
        $gte: dateFromISO,
        $lt: dateToISO,
      },
    })
    :
    undefined;
  return cursor;
});

Meteor.publish('clicks.oneLinkTotalCount', (linkId) => {
  check(linkId, String);
  return Clicks.find({ linkId }).count();
});

Meteor.publish('clicks.all', () => {
  // check(linkId, String);
  return Clicks.find({});
});
