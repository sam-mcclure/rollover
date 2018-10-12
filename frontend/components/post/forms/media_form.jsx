import React from 'react';

class MediaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: '',
      photoFile: '',
      videoFile: '',
      audioFile: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChangePhoto = this.onFileChangePhoto.bind(this);
    this.onFileChangeVideo = this.onFileChangeVideo.bind(this);
    this.onFileChangeAudio = this.onFileChangeAudio.bind(this);
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  onFileChangePhoto(e){
    const file = e.target.files[0];
    this.setState({photoFile: file});
  }

  onFileChangeVideo(e){
    const file = e.target.files[0];
    this.setState({videoFile: file});
  }

  onFileChangeAudio(e){
    const file = e.target.files[0];
    this.setState({audioFile: file});
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.postType);
    formData.append('post[body]', this.state.body);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    if (this.state.videoFile){
      formData.append('post[video]', this.state.videoFile);
    }

    if (this.state.audioFile){
      formData.append('post[audio]', this.state.audioFile);
    }

    this.props.createPost(formData).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.photoFile === ''
    && this.state.videoFile === '' &&
    this.state.audioFile === '') ?
      <button disabled>Post</button> : <button>Post</button>;

    const fileInput = (this.state.postType === 'photo') ?
        <input type="file" onChange={this.onFileChangePhoto} /> :
          (this.state.postType === 'video') ?
        <input type="file" onChange={this.onFileChangeVideo} /> :
          <input type="file" onChange={this.onFileChangeAudio} />;

    return(
      <div className={`form form-${this.props.postType}`}>
        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>

          {fileInput}


          <textarea placeholder="Add a caption, if you like"
            value={this.state.body}
            onChange={this.update('body')} />

          <div className="form-buttons">
            <button onClick={this.props.closeModal}>Close</button>
            {postButton}
          </div>

        </form>
      </div>
    );
  }

}

export default MediaForm;
