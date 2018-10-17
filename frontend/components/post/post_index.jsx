import React from 'react';
import PostIndexItem from './post_index_item';
import { BeatLoader } from 'react-spinners';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPosts(this.props.postKeyword);
  }

  render () {
    const reversed = this.props.posts.reverse();

    const PostItems = reversed.map((post) => {
      return <PostIndexItem key={post.id} post={post}
        deletePost={this.props.deletePost}
        currentUser={this.props.currentUser}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        fetchPosts={this.props.fetchPosts}
        postKeyword={this.props.postKeyword}
        fetchRecommendedFollows={this.props.fetchRecommendedFollows}
        likePost={this.props.likePost}
        unlikePost={this.props.unlikePost}
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
