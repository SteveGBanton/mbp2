import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle }) => (
  <div>
    <div>
      <h1>{title}</h1>
      {subtitle ? <p>{subtitle}</p> : ''}
    </div>
  </div>
);

PageHeader.defaultProps = {
  subtitle: '',
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeader;
