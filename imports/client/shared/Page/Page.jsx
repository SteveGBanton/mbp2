import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';

import PageHeader from './PageHeader/PageHeader';
import Content from './Content/Content';

import styles from './Page.styles';

const Page = ({ title, subtitle, content }) => (
  <div className="Page">
    <PageHeader title={title} subtitle={subtitle} />
    <Content content={content} />
  </div>
);

Page.defaultProps = {
  subtitle: '',
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
};

const pageContent = new ReactiveVar('');

export default compose(
  withTracker(({ content, page }) => {
    window.scrollTo(0, 0); // Force window to top of page.

    Meteor.call('utility.getPage', { page }, (error, response) => {
      if (error) {
        // console.warn(error);
      } else {
        pageContent.set(response);
      }
    });

    return {
      content: content || pageContent.get(),
    };
  }),
  withStyles(styles),
)(Page);
