import React from 'react';

class RecommendedFollowsIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render({user, followUser, currentUser} = this.props){
    return (
      <div>
        <img className='user-img'
          src={user.photoUrl} />
        <strong>{user.username}</strong>
        <button
          onClick={() => followUser(currentUser.id, user.id)}>
          Follow</button>
      </div>
    );
  }
}

export default RecommendedFollowsIndexItem;
