import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import BaseApp from './BaseApp';

// Meteor.startup(function () {
//     if (location.host.indexOf('yago.site') !== 0) {
//         location = 'http://yago.site'
//     }
// })

Meteor.startup(() => render(<BaseApp />, document.getElementById('react-root')));
