import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import TextForm from './text_form';

const msp = (state) => {
  return {
    postType: 'chat',
    titlePlaceholder: 'Title',
    bodyPlaceholder: "My dog: woof \nMe: I love you, too",
    currentUser: state.entities.users[state.session.id],
    postId: null,
    body: '',
    title: '',
    loadingState: state.ui.loading
  };
};

const mdp = dispatch => {
  return {
    action: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(TextForm);
