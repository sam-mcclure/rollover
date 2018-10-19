import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {dropdown: 'hidden'};
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.unfollowAction = this.unfollowAction.bind(this);
    this.followAction = this.followAction.bind(this);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
  }

  toggleDropdown(){
    if (this.state.dropdown === 'hidden'){
      this.setState({dropdown: ''});
    } else {
      this.setState({dropdown: 'hidden'});
    }
  }


  unfollowAction(){
    if (this.props.type){
      this.props.unfollowUser(this.props.currentUser.id,
        this.props.post.followId)
        .then(() => this.props.fetchUser(this.props.userId))
          .then(() => this.props.fetchPosts(
            this.props.userId, {posts: 'user'}));
    } else {
      this.props.unfollowUser(this.props.currentUser.id,
        this.props.post.followId)
        .then(() => this.props.fetchPosts(this.props.postKeyword))
          .then(() => this.props.fetchRecommendedFollows(
            this.props.currentUser.id));
    }
  }

  followAction(){
    if (this.props.type){
      this.props.followUser(this.props.currentUser.id,
        this.props.post.authorId)
        .then(() => this.props.fetchUser(this.props.userId))
          .then(() => this.props.fetchPosts(
            this.props.userId, {posts: 'user'}));
    } else {
    this.props.followUser(this.props.currentUser.id,
      this.props.post.authorId)
      .then(() => this.props.fetchPosts(this.props.postKeyword))
        .then(() => this.props.fetchRecommendedFollows(
          this.props.currentUser.id));
    }
  }

  clickEdit() {
    this.props.openModal(`edit-${this.props.post.postType}`, this.props.
      post.id);
    this.toggleDropdown();
  }

  like(postId, userId){
    this.props.likePost(postId, userId)
      .then(() => this.props.fetchPosts(this.props.postKeyword));
  }

  unlike(postId, likeId){
    this.props.unlikePost(postId, likeId)
      .then(() => this.props.fetchPosts(this.props.postKeyword));
  }

  render({currentUser, post, deletePost, openModal, unfollowUser} = this.props){

    let brokenText = post.body.split('/');
    let commaText = brokenText.map((el) => {
      return el.split(":");
    });

    let chatContent = (post.postType === 'chat') ?
      commaText.map((el, idx) => {
        return <div key={post.id, idx} className="chat-line">
          <strong>{el[0]}:</strong>
          <p> {el[1]}</p>
        </div>;
      }) : '';

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
    </div> :

    (post.likeId) ?

      <div className="dropdown-container">
      <i className="fa fa-heart" aria-hidden="true"
        onClick={() => this.unlike(post.id, post.likeId)}></i>
      </div>

      :

      <div className="dropdown-container">
      <i className="fa fa-heart-o" aria-hidden="true"
        onClick={() => this.like(post.id, currentUser.id)}></i>
      </div>
    ;

    const followButtons = (currentUser.id === post.authorId) ?
      '' : (post.followId) ?
      <div className="user-dropdown">
        <div className="user-dropdown-content">
          <div className="user-dropdown-top">
            <Link to={`/users/${post.authorId}`}>
              <strong>{post.authorUsername}</strong></Link>
            <button className="unfollow"
              onClick={() => this.unfollowAction()}>
              Unfollow</button>
          </div>

            <img className="user-img"
              src={post.authorPhotoUrl} />
        </div>
      </div> :

      <div className="user-dropdown">
        <div className="user-dropdown-content">
          <div className="user-dropdown-top">
            <strong>{post.authorUsername}</strong>
            <button className="unfollow"
              onClick={() => this.followAction()}>
              Follow</button>
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

      (post.postType === 'text') ?
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
        </div> :

      (post.postType === 'chat') ?
        <div className='chat-content'>
          {chatContent}
        </div>
      : '';

    return (
      <div className="post-container">
        <Link to={`/users/${post.authorId}`}>
        <img className="user-img"
          src={post.authorPhotoUrl} /></Link>
        <div className={`post post-${post.postType}`}>
          <div className="follow-dropdown">
            <Link to={`/users/${post.authorId}`}>
              <strong className="username">{post.authorUsername}</strong>
            </Link>
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
