import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class ProfileRouterPage extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <React.Fragment>

          <Switch>
            <Route exact path="/profile/dashboard" render={() => <div />} />

          </Switch>

        </React.Fragment>
  
      )
    }
  }