import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {dropdown: 'hidden'};
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.unfollowAction = this.unfollowAction.bind(this);
  }

  toggleDropdown(){
    if (this.state.dropdown === 'hidden'){
      this.setState({dropdown: ''});
    } else {
      this.setState({dropdown: 'hidden'});
    }

  }

  unfollowAction(){
    this.props.unfollowUser(this.props.currentUser.id,
      this.props.post.followId);
    this.props.fetchPosts();
    this.props.fetchRecommendedFollows(
      this.props.currentUser.id, {recommended: true});
  }

  clickEdit() {
    this.props.openModal(`edit-${this.props.post.postType}`, this.props.
      post.id);
    this.toggleDropdown();
  }

  render({currentUser, post, deletePost, openModal, unfollowUser} = this.props){

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

    const followButtons = (currentUser.id === post.authorId) ?
      '' :
      <div className="user-dropdown">
        <div className="user-dropdown-content">
          <div className="user-dropdown-top">
            <strong>{post.authorUsername}</strong>
            <button className="unfollow"
              onClick={() => this.unfollowAction()}>
              Unfollow</button>
          </div>

            <img className="user-img"
              src={post.authorPhotoUrl} />
        </div>
      </div>;

    const image = (post.photoUrl) ?
      <img src={post.photoUrl} /> : '';

    const video = (post.videoUrl) ?
      <video controls>
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
          <div className="follow-dropdown">
            <strong className="username">{post.authorUsername}</strong>
            {followButtons}
          </div>

        <div className="media-content">
          {image}
          {video}
          {audio}
        </div>

          <div className='post-body'>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
          {postButtons}
        </div>
      </div>
    );
  }

}

export default PostIndexItem;
