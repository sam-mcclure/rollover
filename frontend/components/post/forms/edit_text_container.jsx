import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import TextForm from './text_form';

const msp = (state, ownProps) => {

  return {
    postType: state.entities.posts[ownProps.postId].postType,
    titlePlaceholder: 'Title',
    bodyPlaceholder: 'Your text here',
    currentUser: state.entities.users[state.session.id],
    postId: state.entities.posts[ownProps.postId].id,
    body: state.entities.posts[ownProps.postId].body,
    title: state.entities.posts[ownProps.postId].title
  };
};

const mdp = dispatch => {
  return {
    action: (post, postId) => dispatch(updatePost(post, postId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(TextForm);
