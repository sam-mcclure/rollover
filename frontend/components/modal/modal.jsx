import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ChatFormContainer from '../post/forms/chat_form_container';
import LinkFormContainer from '../post/forms/link_form_container';
import QuoteFormContainer from '../post/forms/quote_form_container';
import TextFormContainer from '../post/forms/text_form_container';
import PhotoFormContainer from '../post/forms/photo_form_container';
import VideoFormContainer from '../post/forms/video_form_container';
import AudioFormContainer from '../post/forms/audio_form_container';

const Modal = ({modal, exitModal}) => {
  if (!modal) {
    return null;
  }
  let component;

  switch (modal) {
    case 'chat':
      component = <ChatFormContainer />;
      break;
    case 'link':
      component = <LinkFormContainer />;
      break;
    case 'quote':
      component = <QuoteFormContainer />;
      break;
    case 'text':
      component = <TextFormContainer />;
      break;
    case 'photo':
      component = <PhotoFormContainer />;
      break;
    case 'video':
      component = <VideoFormContainer />;
      break;
    case 'audio':
      component = <AudioFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={exitModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    exitModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
