import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log In',
    link: <Link to='/signup'>Sign Up</Link>,
    currentUser: state.entities.users[state.session.id],
    defaultState: {email: '', password: ''},
    path: ownProps.location.href
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(msp, mdp)(SessionForm);
