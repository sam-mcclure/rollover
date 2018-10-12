import React from 'react';

class TextForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: '', title: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
        this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[post_type]', this.state.postType);
    formData.append('post[title]', this.state.title);
    formData.append('post[body]', this.state.body);
    this.props.createPost(formData).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.body === '' && this.state.title === '') ?
      <button disabled>Post</button> : <button>Post</button>;

    return(
      <div className={`form form-${this.props.postType}`}>
        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.titlePlaceholder}
            value={this.state.title}
            onChange={this.update('title')} />

          <textarea placeholder={this.props.bodyPlaceholder}
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

export default TextForm;
