import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  render () {
    const PostItems = this.props.posts.map((post) => {
      return <PostIndexItem key={post.id} post={post}
        deletePost={this.props.deletePost}
        currentUser={this.props.currentUser}/>;
    });

    return (
      <div className="post-index">
        <ul>
          {PostItems}
        </ul>
      </div>
    );
  }
}

export default PostIndex;