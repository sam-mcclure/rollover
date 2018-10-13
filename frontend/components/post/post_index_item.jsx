import React from 'react';
import { Link } from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {dropdown: 'hidden'};
  }

  render({currentUser, post, deletePost} = this.props){
    const postButtons = (currentUser.id === post.authorId) ?
    <div className="dropdown-container">
      <i className="fa fa-cog cog-icon"></i>

      <div className="dropdown">
        <Link to={`posts/${post.id}/edit`}><button>Edit</button></Link>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
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
