import React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const button = (this.props.button) ?
    (<div onClick={() => this.props.clearErrors()}
      className='header-button-div'>{this.props.button}</div>) : '';

    return (
      <header>
        <Link to='/'><h1 className='logo'>r</h1></Link>
        {button}
      </header>
    );
  }

}

export default HeaderComponent;
