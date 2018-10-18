import React from 'react';
import LikeIndexContainer from './like_post_index_container';
import Layout from '../layout/layout';
import SidebarLayout from '../layout/sidebar_layout';

class Likes extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <Layout logout={this.props.logout}
        clearErrors={this.props.clearErrors}>

          <div className='content-left'>
            <LikeIndexContainer />
          </div>

          <SidebarLayout />

      </Layout>
    );
  }

}

export default Likes;
