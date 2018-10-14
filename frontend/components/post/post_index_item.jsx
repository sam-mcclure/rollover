import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {dropdown: 'hidden'};
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
  }

  toggleDropdown(){
    if (this.state.dropdown === 'hidden'){
      this.setState({dropdown: ''});
    } else {
      this.setState({dropdown: 'hidden'});
    }

  }

  clickEdit() {
    this.props.openModal(`edit-${this.props.post.postType}`, this.props.
      post.id);
    this.toggleDropdown();
  }

  render({currentUser, post, deletePost, openModal} = this.props){

    const postButtons = (currentUser.id === post.authorId) ?
    <div className="dropdown-container">
      <i className="fa fa-cog cog-icon"
        onClick={this.toggleDropdown}></i>

      <ul className={`dropdown ${this.state.dropdown}`}>
        <li onClick={() => this.clickEdit()}>
          <button>Edit</button></li>
        <li onClick={() => deletePost(post.id)}>
          <button>Delete</button></li>
      </ul>
    </div> : '';

    const image = (post.photoUrl) ?
      <img src={post.photoUrl} /> : '';

    const video = (post.videoUrl) ?
      <video height="240" controls>
        <source src={post.videoUrl} />
      </video> : '';

    const audio = (post.audioUrl) ?
      <audio controls>
        <source src={post.audioUrl} />
      </audio> : '';

    return (
      <div className="post-container">
        <img className="user-img"
          src={post.authorPhotoUrl} />
        <div className={`post post-${post.postType}`}>
          <strong className="username">{post.authorUsername}</strong>
          {post.title}
          {image}
          {video}
          {audio}
          {post.body}
          {postButtons}
        </div>
      </div>
    );
  }

}

export default PostIndexItem;
