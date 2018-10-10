import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../header/header';

class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const button = <button className='header-button'
      onClick={() => this.props.logout()}>Log Out</button>;

    return (
      <div className="dashboard">
        <HeaderComponent button={button} clearErrors={this.props.clearErrors}/>
      </div>
    );
  }

}

export default Dashboard;
