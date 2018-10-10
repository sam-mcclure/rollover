import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomepageContainer from './homepage/homepage_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main">
    

    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
