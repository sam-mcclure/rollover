import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    link: <Link to='/login'><button
    className='header-button login-button'>Log in</button></Link>,
    currentUser: state.entities.users[state.session.id],
    defaultState: {email: '', password: '', username: ''},
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
