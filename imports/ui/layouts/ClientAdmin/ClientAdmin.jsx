import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

import Navigation from '../../components/Navigation/Navigation';

import './ClientAdmin.scss';

const validateUser = function validateCurrentUser(role, group) {
  return (Roles.userIsInRole(Meteor.userId(), [role], group));
};

export default class ClientAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuOpen: true,
    };
  }

  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const { loggingIn, authenticated, component, user, ...rest } = this.props;
    return (
      <div className="dashboard">

        <Navigation {...this.props} toggleMenu={this.toggleMenu} />

        <div className={(this.state.menuOpen) ? "dashboard-menu" : "dashboard-menu-closed"}>
          <Drawer
            className="dashboard-drawer"
            containerStyle={{
              width: '250px',
              zIndex: '1000',
              marginTop: '55px',
              backgroundColor: '#FFF',
              paddingTop: "30px"
            }}
            style={{ color: 'white' }}
            open={this.state.menuOpen}
          >
            <Link to="/add">
              <MenuItem
                primaryText="Create New Yagolink"
                style={{ color: '#616161' }}
                leftIcon={
                  <FontIcon
                    className="material-icons"
                    style={{ color: 'rgba(0,0,0,0.5)', marginLeft: 20 }}
                  >
                    insert_link
                  </FontIcon>
                }
              />
            </Link>
            <Link to="/links">
              <MenuItem
                primaryText="View My Yagolinks"
                style={{ color: '#616161' }}
                leftIcon={
                  <FontIcon
                    className="material-icons"
                    style={{ color: 'rgba(0,0,0,0.5)', marginLeft: 20 }}
                  >
                    view_list
                  </FontIcon>
                }
              />
            </Link>
            {/* <Divider
              style={{ backgroundColor: "#616161", marginTop: "16px", marginBottom: "16px" }}
            /> */}
          </Drawer>
        </div>
        <div className={(this.state.menuOpen) ? "inner-route" : "inner-route-full"}>
          <Route
            {...rest}
            render={props => (
              authenticated ?
                (React.createElement(component, {
                  ...props,
                  loggingIn,
                  authenticated,
                  user,
                }))
                :
                (<Redirect to="/" />)
            )}
          />
        </div>
      </div>
    );
  }
}

ClientAdmin.defaultProps = {
  user: {},
};

ClientAdmin.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};
