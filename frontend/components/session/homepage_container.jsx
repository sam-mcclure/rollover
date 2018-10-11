import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    formType: 'Homepage'
  };
};


export default connect(msp, null)(SessionForm);
