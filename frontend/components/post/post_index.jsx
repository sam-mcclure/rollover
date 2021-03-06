import React from 'react';
import PostIndexItem from './post_index_item';
import { BeatLoader } from 'react-spinners';

class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {nextUserId: null};
  }

  componentDidMount(){
    if (this.props.type) {
      this.props.fetchPosts(this.props.userId, {posts: 'user'});
    } else {
      this.props.fetchPosts(this.props.postKeyword);
    }

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
        type={this.props.type}
        fetchUser={this.props.fetchUser}
        userId={this.props.userId}
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
