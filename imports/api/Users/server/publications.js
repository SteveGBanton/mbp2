import { Meteor } from 'meteor/meteor';

Meteor.publish('users.editProfile', function usersProfile() {
  return Meteor.users.find(this.userId, {
    fields: {
      emails: 1,
      profile: 1,
      services: 1,
    },
  });
});

Meteor.publish(null, function () {
  // Publish custom fields a user should have access to on their own user obj.
  const options = {
    fields: { current: 1 },
  };
  return Meteor.users.find({ _id: this.userId }, options);
});
