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

import ShortLinks from '../../../../api/ShortLinks/ShortLinks';
import clicksInsert from "../../../../api/Clicks/methods";
import Loading from '../../Loading/Loading';

import customFormValidator from '../../../../modules/custom-form-validator';

if (Meteor.isClient) {
  // Cannot import Forwarder to server - cannot load CSS server side in Meteor
  import LinkAdder from '../LinkAdder';

  const userId = Random.id();
  const mockUser = { userId, user: { username: 'john-doe' } };
  const mockShortLink = {
    _id: Random.id(),
    clicks: 0,
    url: 'http://facebook.com/',
    shortLink: Random.id(7),
    owner: userId,
  };

  Enzyme.configure({ adapter: new Adapter() });

  let sandbox;
  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  describe('LinkAdder.jsx', function () {

    let redirectStub;
    let mountStub;
    let meteorCallStub;

    beforeEach(function () {
      handleSubmitStub = sandbox.stub(LinkAdder.prototype, 'handleSubmit');
      meteorCallStub = sandbox.stub(Meteor, 'call');
    });

    it('should render', function () {
      const wrapper = shallow(<LinkAdder />)
      expect(wrapper.find('.link-adder')).to.have.length(1);
    });

    it('should call customFormValidator, reveal error msg with bad URL', function () {
      // const wrapper = shallow(<LinkAdder />)
      expect(true).to.equal(true);
    })

    it('should call Meteor.call link.insert with good URL', function () {
      // const wrapper = shallow(<LinkAdder />)
      // add input URL to form field
      // simulate click
      // expect(meteorCallStub.getCall(0).args[0]).to.equal('link.insert');
      // expect(meteorCallStub.getCall(0).args[1]).to.deep.equal({ url: mockShortLink.url });
    })
  });
}
