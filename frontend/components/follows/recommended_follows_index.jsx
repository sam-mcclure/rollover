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
      return <li><RecommendedFollowsIndexItem key={user.id}
        user={user}
        followUser={this.props.followUser}
        currentUser={this.props.currentUser} /></li>;
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
