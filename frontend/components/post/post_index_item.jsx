import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post, deletePost, currentUser}) => {
  const postButtons = (currentUser.id === post.authorId) ?
  <div>
    <Link to={`posts/${post.id}/edit`}><button>Edit</button></Link>
    <button onClick={() => deletePost(post.id)}>Delete</button>
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
        <strong>{post.authorUsername}</strong>
        {post.title}
        {image}
        {video}
        {audio}
        {post.body}
        {postButtons}
      </div>
    </div>
  );
};

export default PostIndexItem;
