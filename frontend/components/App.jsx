import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import HomepageContainer from './homepage/homepage_container';
import { Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main">
    <header>
    <Link to='/'><h1 className='logo'>r</h1></Link>
    <Route exact path='/' component={HomepageContainer} />
    </header>

    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
