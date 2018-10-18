import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class SidebarLayout extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
    <div className='content-right'>
      <NavbarContainer />
      {this.props.children}
    </div>
      );
  }
}

export default SidebarLayout;
