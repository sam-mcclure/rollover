import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import MediaForm from './media_form';

const msp = (state) => {
  return {
    postType: 'video',
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(MediaForm);
