import React from 'react';
import { BeatLoader } from 'react-spinners';

class MediaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: this.props.body,
      photo: this.props.photo,
      video: this.props.video,
      audio: this.props.audio,
      preview: this.props.preview,
      previewState: this.props.previewState,
      inputState: this.props.inputState
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  disableSubmit(){
    return (e) => {
      e.target.setAttribute('disabled', 'disabled');
    };
  }

  onFileChange(field){
    return (e) =>{
      const reader = new FileReader();
      const file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          [field]: file,
          preview: reader.result,
          previewState: '',
          inputState: 'hidden'});
      };

      reader.readAsDataURL(file);
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.postType);
    formData.append('post[body]', this.state.body);

    if (this.props.type === 'new') {
      if (this.state.postType === 'photo') {
        formData.append('post[photo]', this.state.photo);
      }

      if (this.state.postType === 'video'){
        formData.append('post[video]', this.state.video);
      }

      if (this.state.postType === 'audio'){
        formData.append('post[audio]', this.state.audio);
      }
    }

    this.props.action(formData, this.props.postId).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.photo === ''
    && this.state.video === '' &&
    this.state.audio === '') ?
      <button className="post"
        disabled>Post</button> :
        <button className='post'
          onClick={this.disableSubmit}>Post</button>;

    const acceptTypes = (this.state.postType === 'photo') ?
      ".jpg, .jpeg, .png, .gif" : (this.state.postType === 'video') ?
      ".mp4" : ".mp3, .wav";

    const uploadText = (this.state.postType === 'photo') ?
      <div>
        <i className="fa fa-camera" />
        <p>Click to upload a photo</p>
      </div> :

      (this.state.postType === 'video') ?
      <div>
        <i className="fa fa-video-camera" />
        <p>Click to upload a video</p>
      </div> :

      <div>
        <i className="fa fa-headphones" />
        <p>Click to upload an audio file</p>
      </div>;

    const mediaPreview =
    (this.state.video || this.state.audio || this.state.photo) ?
      (this.state.photo) ?
      <img src={(this.state.preview)} /> : (this.state.video) ?
        <video controls>
          <source src={this.state.preview} />
        </video> :
        <audio controls>
          <source src={this.state.preview} />
        </audio> : '';

    if (this.props.loadingState) {
      return (
        <div>
          <BeatLoader
            color={'rgb(172, 178, 187)'}/>
        </div>
        );
    } else {

      return(
        <div className={`form form-${this.props.postType}`}>
          <strong>{this.props.currentUser.username}</strong>
          <form onSubmit={this.handleSubmit}>


            <div className={`media-file-input ${this.state.inputState}`}
              onClick={() => document.getElementById('file').click()}>
              <input type="file" accept={acceptTypes}
                id="file" className="hidden"
                onChange={this.onFileChange(this.state.postType)} />
              {uploadText}
              <strong>:)</strong>
            </div>

            <div className={`preview ${this.state.previewState}`}>

            <div className="preview-content">{mediaPreview}</div>


            <textarea placeholder="Add a caption, if you like"
              value={this.state.body}
              onChange={this.update('body')} />
            </div>

            <div className="form-buttons">
              <button className="close"
                onClick={this.props.closeModal}>Close</button>
              {postButton}
            </div>

          </form>
        </div>
      );
    }


  }

}

export default MediaForm;
