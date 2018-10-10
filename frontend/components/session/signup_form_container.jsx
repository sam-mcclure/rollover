import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up',
    link: <Link to='/login'>Log In</Link>,
    currentUser: state.entities.users[state.session.id],
    defaultState: {email: '', password: '', username: ''}
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
