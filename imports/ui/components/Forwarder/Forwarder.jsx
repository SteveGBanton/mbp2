import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Loading from '../Loading/Loading';

import ShortLinks from '../../../api/ShortLinks/ShortLinks';

import './Forwarder.scss';

export class Forwarder extends React.Component {
  constructor(props) {
    super(props);
    this.addCount = this.addCount.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      timeOut: false,
      recorded: 0,
    };
  }

  componentDidMount() {
    Meteor.setTimeout(() => {
      this.setState({
        timeOut: true,
      });
    }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    // If findLink and url are truthy in this.props, call addCount
    // Otherwise try nextProps
    if (this.props && this.props.findLink && this.props.url) {
      this.setState({
        recorded: this.state.recorded + 1,
      }, () => {
        this.addCount(this.props.findLink);
      });
    } else if (nextProps && nextProps.findLink && nextProps.url) {
      this.setState({
        recorded: this.state.recorded + 1,
      }, () => {
        this.addCount(nextProps.findLink);
      });
    }
  }

  addCount(findLink) {
    // check for this.state.recorded to equal less than 2
    // ensures clicks.insert is only called once before throttling
    if (this.state.recorded < 2) {
      Meteor.call('clicks.insert', {
        linkId: findLink._id,
      }, (error) => {
        if (error) {
          // Not inserted into DB for some reason. Log to error file on server.
        }
      });
    }
    this.redirect(findLink.url);
  }

  redirect(url) {
    window.location = url;
  }

  render() {
    const { url } = this.props;
    const noValidURL = (this.state.timeOut && !url) ?
      <div className="no-valid-url">Sorry, no valid URL found</div>
      :
      <Loading />;

    return (
      (!url) ?
        <div className="forwarding">
          {noValidURL}
        </div>
        :
        <div className="forwarding url-valid">
          <Loading />
        </div>
    );
  }
}

Forwarder.defaultProps = {
  url: undefined,
  findLink: undefined,
};

Forwarder.propTypes = {
  url: PropTypes.string,
  findLink: PropTypes.shape({}),
};

export default createContainer(({ match }) => {
  const { shortLink } = match.params;
  const subscription = Meteor.subscribe('shortLinks.view', shortLink);
  const loading = !subscription.ready();
  const findLink = ShortLinks.findOne({ shortLink });
  const url = (!loading && findLink) ? findLink.url : undefined;

  return {
    url,
    findLink,
  };
}, Forwarder);
