import React from 'react';
import { openModal } from '../../../actions/modal_actions';

const Form = () => {
  return (
    <div>
      <div onClick={() => openModal('text')}><p>Text</p></div>
      <div onClick={() => openModal('photo')}><p>Photo</p></div>
      <div onClick={() => openModal('photo')}><p>Quote</p></div>
      <div onClick={() => openModal('link')}><p>Link</p></div>
      <div onClick={() => openModal('chat')}><p>Chat</p></div>
      <div onClick={() => openModal('audio')}><p>Audio</p></div>
      <div onClick={() => openModal('video')}><p>Video</p></div>
    </div>
  );
};

export default Form;
