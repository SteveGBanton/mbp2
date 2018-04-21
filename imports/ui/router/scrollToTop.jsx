import React from 'react';
import { shape, node } from 'prop-types';
import { withRouter } from 'react-router';

// React router does not automatically scroll to top on history.push.
// Wrapping MainApp in ScrollToTop ensures scroll comes back to top of window on page change.
class ScrollToTop extends React.Component {
  componentWillUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: shape({}).isRequired,
  children: node.isRequired,
};

export default withRouter(ScrollToTop);
