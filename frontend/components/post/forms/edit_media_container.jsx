import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import MediaForm from './media_form';

const msp = (state, ownProps) => {
  const post = state.entities.posts[ownProps.postId];

  const previewUrl = (post.postType === 'photo') ?
    post.photoUrl : (post.postType === 'video') ?
    post.videoUrl : post.audioUrl;


  return {
    postType: state.entities.posts[ownProps.postId].postType,
    currentUser: state.entities.users[state.session.id],
    postId: post.id,
    body: state.entities.posts[ownProps.postId].body,
    photo: state.entities.posts[ownProps.postId].photoUrl,
    video: state.entities.posts[ownProps.postId].videoUrl,
    audio: state.entities.posts[ownProps.postId].audioUrl,
    preview: previewUrl,
    previewState: '',
    inputState: 'hidden',
    type: 'edit'
  };
};

const mdp = dispatch => {
  return {
    action: (post, postId) => dispatch(updatePost(post, postId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(MediaForm);
