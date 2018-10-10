import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import sessionHomepage from './session/session_homepage';
import { Route, Link, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main">
    <Switch>
      <ProtectedRoute path='/dashboard' component={DashboardContainer} />
      <AuthRoute exact path='/' component={sessionHomepage} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
