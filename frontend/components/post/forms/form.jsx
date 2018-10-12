import React from 'react';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';

const Form = ({openModal}) => {
  return (
    <div className="post-buttons">
      <div className="post-button"
        onClick={() => openModal('text')}>
        <div className="inside-button">
          <i className="fa fa-font text-icon"></i><p>Text</p></div>
      </div>

      <div className="post-button"
        onClick={() => openModal('photo')}>
        <div className="inside-button">
        <i className="fa fa-camera photo-icon"></i><p>Photo</p></div>
        </div>

      <div className="post-button"
        onClick={() => openModal('quote')}>
        <div className="inside-button">
        <i className="fa fa-quote-left quote-icon"></i><p>Quote</p></div>
        </div>

      <div className="post-button"
        onClick={() => openModal('link')}>
        <div className="inside-button">
        <i className="fa fa-link link-icon"></i><p>Link</p></div>
        </div>

      <div className="post-button"
        onClick={() => openModal('chat')}>
        <div className="inside-button">
        <i className="fa fa-commenting chat-icon"></i><p>Chat</p></div>
        </div>

      <div className="post-button"
        onClick={() => openModal('audio')}>
        <div className="inside-button">
        <i className="fa fa-headphones audio-icon"></i><p>Audio</p></div>
        </div>

      <div className="post-button"
        onClick={() => openModal('video')}>
        <i className="fa fa-video-camera video-icon"></i><p>Video</p></div>

    </div>
  );
};

const mdp = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(null, mdp)(Form);
