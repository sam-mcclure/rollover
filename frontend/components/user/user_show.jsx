import React from 'react';
import Layout from '../layout/layout';
import UserIndexContainer from './user_index_container';

class UserShow extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <Layout logout={this.props.logout}
        clearErrors={this.props.clearErrors}>

          <div className='content-left'>
            <UserIndexContainer userId={this.props.userId}/>
          </div>

      </Layout>
    );
  }
}

export default UserShow;
