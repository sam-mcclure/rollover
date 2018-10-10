import React from 'react';
import HeaderComponent from '../header/header';
import { Link } from 'react-router-dom';

const sessionHomepage = () => {
  return (
    <div>
      <HeaderComponent />

      <div className='session-form'>
        <h1>rollover</h1>
        <p>Come for what you love.</p>
        <p>Stay for what you discover</p>

        <form>
          <Link to='/signup'><button>Get Started</button></Link>
          <Link to='/login'><button
            className='index-login'>Log In</button></Link>
        </form>
      </div>
    </div>
  );
};

export default sessionHomepage;
