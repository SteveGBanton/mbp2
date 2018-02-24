import React from 'react';
import PropTypes from 'prop-types';
import LinkAdder from '../../../../components/LinkAdder/LinkAdder'

import './AddLink.scss'

const AddLink = ({ history, user }) => (
  <div className="add-link">
    <div className="add-link-linkadder">
      <LinkAdder history={history} />
    </div>
    <div className="add-link-bg-color" />
  </div>
);

AddLink.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddLink;
