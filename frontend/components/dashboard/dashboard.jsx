import React from 'react';
import PostIndexContainer from '../post/post_index_container';
import Form from '../post/forms/form';
import Layout from '../layout/layout';
import SidebarLayout from '../layout/sidebar_layout';
import RecommendedFollowsContainer from
'../follows/recommended_follows_container';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <Layout logout={this.props.logout}
        clearErrors={this.props.clearErrors}>

          <div className='content-left'>
            <div className="user-bar">
              <Link to={`/users/${this.props.currentUser.id}`}>
                <img className="user-img"
                src={this.props.currentUser.photoUrl} /></Link>
              <Form />
            </div>
            <PostIndexContainer />
          </div>


          <SidebarLayout>
            <RecommendedFollowsContainer />
          </SidebarLayout>

      </Layout>
    );
  }

}

export default Dashboard;
