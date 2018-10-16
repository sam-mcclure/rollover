import React from 'react';

class RecommendedFollowsIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.followAction = this.followAction.bind(this);
  }

  followAction(){
    this.props.followUser(this.props.currentUser.id, this.props.user.id)
      .then(() => this.props.fetchPosts())
        .then(() => this.props.fetchRecommendedFollows(
          this.props.currentUser.id, {recommended: true}));
  }

  render({user, followUser, currentUser} = this.props){
    return (
      <div className='rec-item'>
        <div className='rec-info'>
          <img className='rec-img'
            src={user.photoUrl} />
          <strong>{user.username}</strong>
        </div>
        <button
          onClick={() => this.followAction()}>
          <i className="fa fa-plus-square" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default RecommendedFollowsIndexItem;
