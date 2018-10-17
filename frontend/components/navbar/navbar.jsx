import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser}) => (
  <div className="sidebar-nav">
    <strong className='username'>{currentUser.username}</strong>
    <Link to='/dashboard'>Home</Link>
    <Link to='/likes'>Likes</Link>
  </div>
);

export default Navbar;
