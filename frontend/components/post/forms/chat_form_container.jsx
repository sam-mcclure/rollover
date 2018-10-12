import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import TextForm from './text_form';

const msp = (state) => {
  return {
    postType: 'chat',
    titlePlaceholder: 'Title',
    bodyPlaceholder: "My dog: woof Me: I love you, too",
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(TextForm);
