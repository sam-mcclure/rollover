import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(msp, null)(Navbar);
