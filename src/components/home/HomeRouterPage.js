import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class HomeRouterPage extends Component {
    constructor(props) {
       super(props)
    }
    render() {
      return (
          <Switch>
             <Route path='/something' render={() => <div />} />

          </Switch>
      )
    }
  }
  
  export default HomeRouterPage