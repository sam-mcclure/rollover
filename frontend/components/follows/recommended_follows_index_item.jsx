import React from 'react';

class RecommendedFollowsIndexItem extends React.Component {
  constructor(props){
    super(props);
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
          onClick={() => followUser(currentUser.id, user.id)}>
          <i className="fa fa-plus-square" aria-hidden="true"></i></button>
      </div>
    );
  }
}

export default RecommendedFollowsIndexItem;
