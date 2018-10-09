import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';

//testing
window.login = login;
window.signup = signup;
window.logout = logout;
//testing

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>rollover</h1>, root);
});
