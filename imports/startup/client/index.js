import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/App/App.jsx';

import '../../ui/stylesheets/app.scss';

// Meteor.startup(function () {
//     if (location.host.indexOf('yago.site') !== 0) {
//         location = 'http://yago.site'
//     }
// })

Bert.defaults = {
  hideDelay: 3500,
  style: 'growl-bottom-right',
  type: 'default'
};

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
