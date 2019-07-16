import React from 'react';
import {Switch,Route } from 'react-router-dom'
import HomeRouterPage from './components/home/HomeRouterPage'
import ProfileRouterPage from './components/profile/ProfileRouterPage'

function App() {
  return (
    <React.Fragment>
        <div> NAV </div>
        <Switch>
            <Route exact path="/" render={props => <HomeRouterPage /> } />
            <Route path="/profile" render={props => <ProfileRouterPage />} />
            <Route render={() => <HomeRouterPage />} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
