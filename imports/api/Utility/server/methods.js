import { Meteor } from 'meteor/meteor';
import getPrivateFile from '../../../modules/server/get-private-file';
import parseMarkdown from '../../../modules/parse-markdown';

export const utilityGetPage2 = new ValidatedMethod({
  name: 'utility.getPage',
  validate: new SimpleSchema({
    page: { type: String },
  }).validator(),
  run({ page }) {
    return parseMarkdown(getPrivateFile(`pages/${page}.md`));
  },
});

export const remoteGet = new ValidatedMethod({
  name: 'utility.remoteGet',
  validate: null,
  run(getThis) {
    try {
      return HTTP.get(getThis);
    } catch (e) {
      throw new Meteor.Error('500', e);
    }
  },
});
