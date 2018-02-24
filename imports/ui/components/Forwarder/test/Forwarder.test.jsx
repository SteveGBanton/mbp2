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

if (Meteor.isClient) {
  // Cannot import Forwarder to server - cannot load CSS server side in Meteor
  import { Forwarder } from '../Forwarder';

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
  
  describe('Forwarder.jsx', function () {

    let redirectStub;
    let mountStub;
    let meteorCallStub;

    beforeEach(function () {
      redirectStub = sandbox.stub(Forwarder.prototype, 'redirect');
      mountStub = sandbox.stub(Forwarder.prototype, 'componentDidMount');
      meteorCallStub = sandbox.stub(Meteor, 'call');
    });

    it('should render', function () {
      const wrapper = shallow(<Forwarder />);
      expect(mountStub.calledOnce).to.equal(true);
    });

    it('should call redirect method with passed-in URL', function (done) {
      const wrapper = shallow(<Forwarder url={mockShortLink.url} findLink={mockShortLink}/>)
      wrapper.instance().componentWillReceiveProps(); // must call manually
      expect(redirectStub.getCall(0).args[0]).to.equal(mockShortLink.url);
      done();
    });

    it('should call Meteor.call clicks.insert with correct args once', function (done) {
      const wrapper = shallow(<Forwarder url={mockShortLink.url} findLink={mockShortLink} />)
      wrapper.instance().componentWillReceiveProps(); // must call manually
      expect(meteorCallStub.getCall(0).args[0]).to.equal('clicks.insert');
      expect(meteorCallStub.getCall(0).args[1]).to.deep.equal({ linkId: mockShortLink._id });
      done();
    })

    it('should display no valid URL if shortlink does not map to a URL', function (done) {
      const wrapper = shallow(<Forwarder />)
      expect(wrapper.contains(<Loading />)).to.equal(true);
      wrapper.setState({ timeOut: true }); // trigger timeout manually, normally after 2s
      expect(wrapper.text()).to.contain('no valid URL found');
      done();
    })

  });

}
