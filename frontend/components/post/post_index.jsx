import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render () {
    const reversed = this.props.posts.reverse();

    const PostItems = reversed.map((post) => {
      return <PostIndexItem key={post.id} post={post}
        deletePost={this.props.deletePost}
        currentUser={this.props.currentUser}
        unfollowUser={this.props.unfollowUser}
        fetchPosts={this.props.fetchPosts}
        fetchRecommendedFollows={this.props.fetchRecommendedFollows}
        openModal={this.props.openModal}/>;
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
