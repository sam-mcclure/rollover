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

    const headerClass = (this.props.headerClass) ? 'dashboard-header' :
      '';

    return (
      <header className={headerClass}>

      <Link to='/'><h1 className='logo'
        onClick={() => this.props.clearErrors()}>r</h1></Link>

      <nav>

        <a href="https://github.com/sam-mcclure/rollover">
          <i className="fa fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/sam-mcclure-developer/">
        <i className="fa fa-linkedin"></i></a>
        {button}
      </nav>
      </header>
    );
  }

}

export default HeaderComponent;
