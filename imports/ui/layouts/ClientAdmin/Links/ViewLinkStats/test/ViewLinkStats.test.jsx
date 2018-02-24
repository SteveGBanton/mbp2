/* eslint-env mocha */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { Random } from 'meteor/random';
import { expect } from 'meteor/practicalmeteor:chai';
import sinon from 'sinon';
import { check } from 'meteor/check';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

if (Meteor.isClient) {
  // only import if on client - CSS called by component cannot be loaded server-side.
  import { ViewLinkStats } from '../ViewLinkStats';

  Enzyme.configure({ adapter: new Adapter() });

  describe('ViewLinkStats.jsx', function () {

    it('should render main component div wrapper', function () {
      const wrapper = shallow(<ViewLinkStats />);
      expect(wrapper.find('.view-shortlink')).to.have.length(1);
    });

  });

}
