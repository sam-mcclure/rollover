import React from 'react';

class MediaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: '',
      photo: '',
      video: '',
      audio: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  onFileChange(field){
    return (e) =>{
      const file = e.target.files[0];
      this.setState({[field]: file});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.postType);
    formData.append('post[body]', this.state.body);

    if (this.state.photo) {
      formData.append('post[photo]', this.state.photo);
    }
    if (this.state.video){
      formData.append('post[video]', this.state.video);
    }
    if (this.state.audio){
      formData.append('post[audio]', this.state.audio);
    }

    this.props.createPost(formData).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.photo === ''
    && this.state.video === '' &&
    this.state.audio === '') ?
      <button disabled>Post</button> : <button>Post</button>;

    return(
      <div className={`form form-${this.props.postType}`}>
        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>

          <input type="file"
            onChange={this.onFileChange(this.state.postType)} />

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
