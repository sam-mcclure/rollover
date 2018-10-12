import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import TextForm from './text_form';

const msp = (state) => {
  return {
    postType: 'link',
    titlePlaceholder: 'Type or paste a URL',
    bodyPlaceholder: "Add a description, if you like",
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(TextForm);
