import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import BaseApp from './BaseApp';

// Meteor.startup(function () {
//     if (location.host.indexOf('yago.site') !== 0) {
//         location = 'http://yago.site'
//     }
// })

Bert.defaults = {
  hideDelay: 3500,
  style: 'growl-bottom-right',
  type: 'default',
};

Meteor.startup(() => render(<BaseApp />, document.getElementById('react-root')));
