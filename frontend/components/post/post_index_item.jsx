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
      this.props.post.followId)
      .then(() => this.props.fetchPosts())
        .then(() => this.props.fetchRecommendedFollows(
          this.props.currentUser.id, {recommended: true}));


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

    const content = (post.postType === 'photo') ?
    <div>
      <div className='media-content'>
      <img src={post.photoUrl} /></div>
      <div className='post-text-content'>
        <p className='post-body'>{post.body}</p>
      </div></div> :

      (post.postType === 'video') ?
      <div>
        <div className='media-content'>
        <video controls>
          <source src={post.videoUrl} />
        </video></div>
        <div className='post-text-content'>
          <p className='post-body'>{post.body}</p>
      </div></div> :

      (post.postType === 'audio') ?
      <div>
        <div className='media-content'>
        <audio controls>
          <source src={post.audioUrl} />
        </audio></div>
        <div className='post-text-content'>
          <p className='post-body'>{post.body}</p>
      </div></div> :

      (post.postType === 'text' || post.postType === 'chat') ?
        <div className='post-text-content'>
          <p className='post-title'>{post.title}</p>
          <p className='post-body'>{post.body}</p>
        </div> :

      (post.postType === 'link') ?
      <div className='post-text-content'>
        <a href={`https://${post.title}`}>
          <p className='post-title'>{post.title}</p></a>
        <p className='post-body'>{post.body}</p>
      </div> :

      (post.postType === 'quote') ?
        <div className='post-text-content'>
            <p className='quote-title'>&ldquo;{post.title}&rdquo;</p>
            <p className='post-body'>&mdash;  {post.body}</p>
        </div>
      : '';

    return (
      <div className="post-container">
        <img className="user-img"
          src={post.authorPhotoUrl} />
        <div className={`post post-${post.postType}`}>
          <div className="follow-dropdown">
            <strong className="username">{post.authorUsername}</strong>
            {followButtons}
          </div>

          {content}

          {postButtons}
        </div>
      </div>
    );
  }

}

export default PostIndexItem;
