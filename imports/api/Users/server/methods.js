import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import camelCase from 'lodash.camelcase';
import editProfile from './edit-profile';
import rateLimit from '../../../modules/rate-limit';
import validator from '../../../modules/fzValidator';

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
    'profile.industry': { type: String },
    'profile.position': { type: String },
    'profile.name': { type: String },
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

export const usersEditOAuthProfile = new ValidatedMethod({
  name: 'users.editProfileOAuth',
  validate: new SimpleSchema({
    profile: { type: Object },
    'profile.industry': { type: String },
    'profile.position': { type: String },
    'profile.name': { type: String },
  }).validator(),
  run(data) {
    const { profile } = data;
    const { userId } = this;
    try {
      const errors = validator(
        { ...profile },
        {
          name: {
            required: true,
            maxLength: 30,
            minLength: 3,
          },
          position: {
            maxLength: 30,
          },
          industry: {
            maxLength: 30,
          },
        },
        {
          name: {
            required: 'Sorry, name is required',
            maxLength: 'Sorry, name is too long!',
            minLength: 'Sorry, name must be at least 3 characters',
          },
          position: {
            maxLength: 'Sorry, position is too long!',
          },
          industry: {
            maxLength: 'Sorry, industry is too long!',
          },
        },
      );
      if (errors === false) {
        Meteor.users.update(userId, {
          $set: {
            profile,
          },
        });
      } else {
        throw new Meteor.Error('422', 'Sorry, name is required');
      }
    } catch (exception) {
      throw new Meteor.Error('500', exception);
    }
  },
});


rateLimit({
  methods: [
    'users.editProfile',
    'users.changeCurrentOrgRole',
    'users.createNewAdminUser',
    'users.checkUsername',
    'users.editProfileOAuth',
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
