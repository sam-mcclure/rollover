import React from 'react';

class MediaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: '', photoFile: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  onFileChange(e){
    const file = e.target.files[0];
    this.setState({photoFile: file});
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.postType);
    formData.append('post[body]', this.state.body);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    this.props.createPost(formData).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.photoFile === '') ?
      <button disabled>Post</button> : <button>Post</button>;

    return(
      <div className={`form form-${this.props.postType}`}>
        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>

          <input type="file" onChange={this.onFileChange} />


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
