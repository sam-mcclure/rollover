import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../header/header';
import PostIndexContainer from '../post/post_index_container';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const button = <button className='header-button'
      onClick={() => this.props.logout()}>Log Out</button>;

    return (
      <div className="dashboard">
        <HeaderComponent button={button} clearErrors={this.props.clearErrors}
          headerClass='dashboard'/>
        <img src={this.props.currentUser.photoUrl} />

        <div className="post-buttons">
          
        </div>

        <PostIndexContainer />
      </div>
    );
  }

}

export default Dashboard;
