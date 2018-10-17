import React from 'react';
import HeaderComponent from '../header/header';
import RecommendedFollowsContainer from
'../follows/recommended_follows_container';
import NavbarContainer from '../navbar/navbar_container';

class Layout extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const button = <button className='header-button'
      onClick={() => this.props.logout()}>Log Out</button>;

    return (
      <div className="dashboard">
        <HeaderComponent button={button}
          clearErrors={this.props.clearErrors}
          headerClass='dashboard'/>

          <div className="main-content">

              {this.props.children}


            <div className='content-right'>
              <NavbarContainer />
              <RecommendedFollowsContainer />
            </div>
          </div>

      </div>
      );
  }
}

export default Layout;
