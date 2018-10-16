import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../header/header';
import PostIndexContainer from '../post/post_index_container';
import RecommendedFollowsContainer from
'../follows/recommended_follows_container';
import Form from '../post/forms/form';

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

        <div className="main-content">
          <div className='content-left'>
            <div className="user-bar">
              <img className="user-img"
                src={this.props.currentUser.photoUrl} />
              <Form />
            </div>
            <PostIndexContainer />
          </div>

          <div className='content-right'>
            <RecommendedFollowsContainer />
          </div>
        </div>



      </div>
    );
  }

}

export default Dashboard;
