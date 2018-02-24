/* eslint-disable max-len, no-return-assign */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { Link } from 'react-router-dom';
import Clipboard from 'clipboard';

import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import customFormValidator from '../../../modules/custom-form-validator';
import './LinkAdder.scss';

const rules = {
  url: {
    required: true,
    url: true,
  },
};

const messages = {
  url: {
    required: 'Please enter a link.',
    url: 'Please enter a full URL with http(s)',
  },
};

export default class LinkAdder extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formValidate = this.formValidate.bind(this);
    this.clearShortLink = this.clearShortLink.bind(this);

    this.state = ({
      formErrors: {
        url: '',
      },
      shortLink: '',
    });
  }

  formValidate() {
    const input = {
      url: this.url.input.value,
    };

    const formErrors = customFormValidator(input, rules, messages);

    if (!formErrors) {
      this.handleSubmit(input);
      this.setState({ formErrors: {} });
    } else {
      this.setState({ formErrors });
    }
  }

  handleSubmit(input) {
    Meteor.call('link.insert', input, (error, res) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        this.form.reset();
        Bert.alert('Yagolink created!', 'success');
        this.setState({
          shortLink: `${Meteor.absoluteUrl()}${res}`,
        });
      }
    });
  }

  clearShortLink() {
    this.setState({
      shortLink: '',
    });
  }

  render() {
    return (
      <form className="link-adder" ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>
        {(() => { const clipboard = new Clipboard('.copy-btn1'); })()}

        {(this.state.shortLink) ?
          <div
            className="copy-btn1 pointer"
            onClick={() => Bert.alert('Link Copied!', 'success')}
            role="button"
            tabIndex={0}
            onKeyPress={() => Bert.alert('Link Copied!', 'success')}
            data-clipboard-text={this.state.shortLink}
          >
            {this.state.shortLink}
            <FontIcon
              className="material-icons"
              style={{ color: '#559', marginLeft: 5, fontSize: 16 }}
            >
              content_copy
            </FontIcon>
          </div>
          :
          ''
        }

        {(this.state.shortLink && Meteor.user() !== null) ?
          <div
            style={{
              fontSize: 10,
              marginBottom: -10,
            }}
          >
              View all yagolinks you have created <Link to="/links">here</Link>
          </div>
          :
          ''
        }

        {(this.state.shortLink && Meteor.user() === null) ?
          <div
            style={{
              fontSize: 10,
              marginBottom: -10,
            }}
          >
            <a href="/login">Log in</a> to save your yagolinks and view clicks!
          </div>
          :
          ''
        }

        {(!this.state.shortLink) ?
          <TextField
            name="title"
            style={{ fontSize: 20, width: 320 }}
            hintText="Add a new link"
            hintStyle={{ padding: 10 }}
            inputStyle={{ paddingLeft: 10, marginTop: -10 }}
            ref={(input) => { this.url = input; }}
          />
          :
          ''
        }

        <br />

        {(this.state.formErrors.url) ?
          <div
            style={{
              color: 'red',
              fontSize: 10,
              width: '100%',
              marginTop: -10,
            }}
          >
            * {this.state.formErrors.url}
          </div>
          :
          ''
        }

        {(!this.state.shortLink) ?
          <RaisedButton
            type="submit"
            backgroundColor="#03A9F4"
            onClick={this.formValidate}
            style={{ marginTop: 35 }}
          >
            <span style={{ color: '#EEEEEE' }}>Submit</span>
          </RaisedButton>
          :
          <RaisedButton
            type="submit"
            backgroundColor="#03A9F4"
            onClick={this.clearShortLink}
            style={{ marginTop: 35 }}
          >
            <span style={{ color: '#EEEEEE' }}>Add New</span>
          </RaisedButton>
        }
      </form>
    );
  }
}
