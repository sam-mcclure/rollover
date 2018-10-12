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
    this.props.createPost(formData);
  }

  render(){
    return(
      <div className={`form-${this.props.postType}`}>
        <strong>{this.props.currentUser.username}</strong>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.titlePlaceholder}
            value={this.state.title}
            onChange={this.update('title')} />

          <textare placeholder={this.props.bodyPlaceholder}
            value={this.state.body}
            onChange={this.update('body')} />

          <button>Post</button>


        </form>
      </div>
    );
  }

}
