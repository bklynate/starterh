import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './../components/PrivateRoute';
import * as actions from './../actions';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';

const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
              <div className="container-fluid">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <Route exact path="*" component={NotFound404} />
                </Switch>
              </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
