import React from 'react';
import { shape, node } from 'prop-types';
import { withRouter } from 'react-router';

// React router does not automatically scroll to top on history.push.
// Wrapping MainApp in ScrollToTop ensures scroll comes back to top of window on page change.
class ScrollToTop extends React.Component {
  componentDidMount() {
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const hashParts = window.location.hash.split('#');
    if (hashParts.length >= 2) {
      setTimeout(() => {
        const hash = hashParts.slice(-1)[0];
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);
    }
  }

  componentWillUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.location.hash = window.decodeURIComponent(window.location.hash);
      const hashParts = window.location.hash.split('#');
      if (hashParts.length >= 2) {
        const hash = hashParts.slice(-1)[0];
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo(0, 0);
      }
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
