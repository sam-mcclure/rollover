import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({currentUser, logout}) => {
  const loggedIn = () => (
    <nav>
      <p>{currentUser.username}</p>
      <button onClick={() => logout()}>Log Out</button>
    </nav>
  );

  const loggedOut = () => (
    <nav>
      <h1>rollover</h1>
      <p>Come for what you love.</p>
      <p>Stay for what you discover</p>
      <Link to='/signup'><button>Sign Up</button></Link>
      <Link to='/login'><button>Log In</button></Link>
    </nav>
  );

  return currentUser ? loggedIn() : loggedOut();

};

export default Homepage;
