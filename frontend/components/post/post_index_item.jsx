import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({post, deletePost, currentUser}) => {
  const postButtons = (currentUser.id === post.authorId) ?
  <div>
    <Link to={`posts/${post.id}/edit`}><button>Edit</button></Link>
    <button onClick={() => deletePost(post.id)}>Delete</button>
  </div> : '';

  return (
    <div className="post-container">
      <img className="user-img"
        src={post.authorPhotoUrl} />
      <div className={`post post-${post.postType}`}>
        <strong>{post.authorUsername}</strong>
        {post.title}
        {post.body}
        {postButtons}
      </div>
    </div>
  );
};

export default PostIndexItem;
