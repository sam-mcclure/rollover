import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//Testing
import { login, logout, signup } from './util/session_api_util';
//Testing

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  ReactDOM.render(<h1>rollover</h1>, root);
});
