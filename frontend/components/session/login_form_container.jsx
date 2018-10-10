import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    link: <Link to='/signup'><button
    className='header-button signup-button'>Sign up</button></Link>,
    currentUser: state.entities.users[state.session.id],
    defaultState: {email: '', password: ''},
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
