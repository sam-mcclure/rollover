import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import HomepageContainer from './session/homepage_container';
import UserContainer from './user/user_container';
import LikesContainer from './likes/likes_container';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div className="main">
    <Modal />
    <Switch>
      <ProtectedRoute path='/dashboard' component={DashboardContainer} />
      <ProtectedRoute path='/likes' component={LikesContainer} />
      <ProtectedRoute path="/users/:userId" component={UserContainer} />
      <AuthRoute exact path='/' component={HomepageContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
