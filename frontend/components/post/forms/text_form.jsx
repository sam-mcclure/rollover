import React from 'react';

class TextForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postType: this.props.postType,
      body: this.props.body,
      title: this.props.title,
      postId: this.props.postId
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

    if (this.state.postType === 'chat'){
      const brokenLines = this.state.body.split("\n").join("/");
      formData.append('post[body]', brokenLines);
    } else {
      formData.append('post[body]', this.state.body);
    }

    this.props.action(formData, this.state.postId).then(this.props.closeModal);
  }

  render(){
    const postButton = (this.state.body === '' && this.state.title === '') ?
    <button className="post"
      disabled>Post</button> :
      <button className='post'>Post</button>;

    const quoteLeft = (this.state.postType === 'quote') ?
      <p>&ldquo;</p> : '';

    const quoteRight = (this.state.postType === 'quote') ?
    <p>&rdquo;</p> : '';

    const dash = (this.state.postType === 'quote') ?
    <p>&mdash;</p> : '';

    return(
      <div className={`form form-${this.props.postType}`}>

        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>

          <div className="title-container">
          {quoteLeft}
          <input type="text"
            placeholder={this.props.titlePlaceholder}
            className="title"
            value={this.state.title}
            onChange={this.update('title')} />
          {quoteRight}
          </div>

          <div className="body-container">
          {dash}
          <textarea placeholder={this.props.bodyPlaceholder}
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

export default TextForm;
