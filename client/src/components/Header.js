/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Log in with Google</a>;
      default:
      return (
        <div>
          <a
            href="#"
            data-activates="mobile-demo"
            className="button-collapse"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <Link to="/dashboard">ProMe Dashboard</Link>
            </li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <Link to="/dashboard">ProMe Dashboard</Link>
            </li>
          </ul>
        </div>
      );
    }
  }
  render() {
    return (
      <nav>
        <div className="header nav-wrapper">
          <Link
            to={this.props.auth ? '/' : '/'}
            className="left brand-logo">
            ProMeHealth
          </Link>
          <ul className="right header-right">
            <li className="header-right-content">{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Header);
