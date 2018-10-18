import React from 'react';
import Layout from '../layout/layout';
import UserIndexContainer from './user_index_container';
import SidebarLayout from '../layout/sidebar_layout';

class UserShow extends React.Component {

  constructor(props){
    super(props);
    this.followAction = this.followAction.bind(this);
    this.unfollowAction = this.unfollowAction.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }


  unfollowAction(){
    this.props.unfollowUser(this.props.currentUser.id,
      this.props.user.followId)
      .then(() => this.props.fetchUser(this.props.userId))
        .then(() => this.props.fetchPosts(this.props.userId, {posts: 'user'}));
  }

  followAction(){
    this.props.followUser(this.props.currentUser.id,
      this.props.userId)
      .then(() => this.props.fetchUser(this.props.userId))
        .then(() => this.props.fetchPosts(this.props.userId, {posts: 'user'}));
  }

  render(){

    const followButtons =
    (this.props.user) ? (
    (this.props.currentUser.id === this.props.user.id) ? ''
    : (this.props.user.followId) ?

    <button className="follow"
      onClick={() => this.unfollowAction()}>
      Unfollow</button> :

    <button className="follow"
      onClick={() => this.followAction()}>
      Follow</button>) : '';

    const headerContent = (this.props.user) ?
    <div className="user-show">
      {followButtons}
      <div className='circle'><img className='show-img'
        src={this.props.user.photoUrl}/></div>
      <h2>{this.props.user.username}</h2>
    </div> : '';


    return (
      <Layout logout={this.props.logout}
        clearErrors={this.props.clearErrors}>

          <div className='content-left'>
            {headerContent}
            <UserIndexContainer userId={this.props.userId}/>
          </div>

          <SidebarLayout />

      </Layout>
    );
  }
}

export default UserShow;
