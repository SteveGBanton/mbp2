import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import camelCase from 'lodash.camelcase';
import editProfile from './edit-profile';
import rateLimit from '../../../modules/rate-limit';

export const changeCurrentOrgRole = new ValidatedMethod({
  name: 'users.changeCurrentOrgRole',
  validate: new SimpleSchema({
    currentOrg: { type: String },
    currentRole: { type: String },
  }).validator(),
  run({ currentOrg, currentRole }) {
    try {
      Meteor.users.update(this.userId, {
        $set: {
          current: {
            currentRole,
            currentOrg,
          },
        },
      });
    } catch (exception) {
      throw new Meteor.Error(
        'accounts.changeorgrole.error',
        `Error changing current org/role. ${exception}`,
      );
    }
  },
});

export const firstTimeUserLogged = new ValidatedMethod({
  name: 'users.firstTimeUserLogged',
  validate: null,
  run() {
    try {
      Meteor.users.update(this.userId, {
        $set: {
          firstLogin: false,
        },
      });
    } catch (exception) {
      throw new Meteor.Error(
        'accounts.firstTimeLogged.error',
        `Error logging first login. ${exception}`,
      );
    }
  },
});

export const createNewUser = new ValidatedMethod({
  name: 'users.createNewUser',
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
  }).validator(),
  run(newUser) {
    const { username } = newUser;
    const id = Accounts.createUser(newUser);
    const verifiedUsername = camelCase(username);
    try {
      if (verifiedUsername !== username) {
        throw new Meteor.Error(
          'accounts.createuser.usernameError',
          'Invalid username',
        );
      }
      Roles.addUsersToRoles(id, ['user'], verifiedUsername);
      Meteor.users.update(id, {
        $set: {
          current: {
            currentRole: 'user',
            currentOrg: verifiedUsername,
          },
        },
      });
      return id;
    } catch (exception) {
      Meteor.users.remove(id);
      throw new Meteor.Error(
        'accounts.createuser.error',
        `Error creating new user: ${exception.reason}`,
      );
    }
  },
});

export const usersSendVerificationEmail = new ValidatedMethod({
  name: 'users.sendVerificationEmail',
  validate: null,
  run() {
    return Accounts.sendVerificationEmail(this.userId);
  },
});

export const usersEditProfile = new ValidatedMethod({
  name: 'users.editProfile',
  validate: new SimpleSchema({
    previousEmailAddress: { type: String },
    emailAddress: { type: String },
    profile: { type: Object },
    'profile.orgName': { type: String },
    'profile.name': { type: Object },
    'profile.name.first': { type: String },
    'profile.name.last': { type: String },
  }).validator(),
  run(profile) {
    return editProfile({ userId: this.userId, profile })
      .then(response => response)
      .catch((exception) => {
        throw new Meteor.Error('500', exception);
      });
  },
});

export const usersCheckUsername = new ValidatedMethod({
  name: 'users.checkUsername',
  validate: new SimpleSchema({
    potentialUserName: { type: String },
  }).validator(),
  run({ potentialUserName }) {
    return Meteor.users.find({ username: potentialUserName }).count();
  },
});

rateLimit({
  methods: [
    'users.editProfile',
    'users.changeCurrentOrgRole',
    'users.createNewAdminUser',
    'users.checkUsername',
  ],
  limit: 5,
  timeRange: 1000,
});

rateLimit({
  methods: [
    'users.sendVerificationEmail',
  ],
  limit: 1,
  timeRange: 5000,
});
