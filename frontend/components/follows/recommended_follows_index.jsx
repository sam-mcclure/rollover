import React from 'react';
import RecommendedFollowsIndexItem from './recommended_follows_index_item';

class RecommendedFollowsIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRecommendedFollows(this.props.currentUser.id,
      {recommended: true});
  }

  render(){
    const followItems = this.props.recommendedFollows.map((user) => {
      return <li key={user.id}><RecommendedFollowsIndexItem
        user={user}
        followUser={this.props.followUser}
        currentUser={this.props.currentUser}
        fetchPosts={this.props.fetchPosts} /></li>;
    });

    return(
      <div className='follow-index'>
        <p>RECOMMENDED BLOGS</p>
        <ul>
          {followItems}
        </ul>
      </div>

    );
  }

}

export default RecommendedFollowsIndex;
