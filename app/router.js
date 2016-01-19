import React from 'react'
import { ApplicationComponent } from './modules/application/component'
import { SignupComponent } from './modules/auth/signup/component'
import { HomeComponent } from './modules/home/component';
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
const browserHistory = createBrowserHistory()

export const AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={ApplicationComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="signup" component={SignupComponent} />
    </Route>
  </Router>
);
