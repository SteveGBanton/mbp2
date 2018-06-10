import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
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
    verifyPassword: { type: String },
  }).validator(),
  run(newUser) {
    const id = Accounts.createUser(newUser);
    try {
      if (newUser.password !== newUser.verifyPassword) {
        throw new Meteor.Error(
          'accounts.createuser.passwordsnomatch',
          'Sorry, passwords do not match',
        );
      }
      Roles.addUsersToRoles(id, ['user'], newUser.email);
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
    'profile.industry': { type: String, optional: true },
    'profile.position': { type: String, optional: true },
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
            minLength: 2,
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
            minLength: 'Sorry, name must be at least 2 characters',
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

export const usersEditProfileEmail = new ValidatedMethod({
  name: 'users.editProfileEmail',
  validate: new SimpleSchema({
    email: { type: String },
    profile: { type: Object },
    'profile.industry': { type: String, optional: true },
    'profile.position': { type: String, optional: true },
    'profile.name': { type: String },
  }).validator(),
  run(data) {
    const { userId } = this;
    const user = Meteor.user();
    const previousEmailAddress = user.emails[0].address;
    try {
      const errors = validator(
        data,
        {
          email: {
            required: true,
            email: true,
          },
          'profile.name': {
            required: true,
            maxLength: 30,
            minLength: 2,
          },
          'profile.position': {
            maxLength: 30,
          },
          'profile.industry': {
            maxLength: 30,
          },
        },
        {
          email: {
            required: 'Email is required',
            email: 'Please enter a valid email',
          },
          'profile.name': {
            required: 'Sorry, name is required',
            maxLength: 'Sorry, name is too long!',
            minLength: 'Sorry, name must be at least 2 characters',
          },
          'profile.position': {
            maxLength: 'Sorry, position is too long!',
          },
          'profile.industry': {
            maxLength: 'Sorry, industry is too long!',
          },
        },
      );

      if (errors === false) {
        Meteor.users.update(userId, {
          $set: {
            'emails.0.address': data.email,
            profile: data.profile,
          },
        });

        if (data.email !== previousEmailAddress) {
          Meteor.users.update(userId, {
            $set: {
              'emails.0.verified': false,
            },
          });
        }
      } else {
        // TODO: get first error from errors and send it back, or pass errors back!
        throw new Meteor.Error('422', 'Sorry, could not update profile!');
      }
    } catch (exception) {
      throw new Meteor.Error('500', exception.reason);
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
