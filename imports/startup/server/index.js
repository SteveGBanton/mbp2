import './accounts';
import './api';
import './email';

Meteor.users.deny({
  update() { return true; },
});
