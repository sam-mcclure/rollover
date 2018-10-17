import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({currentUser}) => (
  <div className="sidebar-nav">
    <strong className='username'>{currentUser.username}</strong>
    <Link to='/dashboard'>
      <i className="fa fa-user" aria-hidden="true"></i>Dashboard</Link>
    <Link to='/likes'>
      <i className="fa fa-heart" aria-hidden="true"></i>Likes</Link>
  </div>
);

export default Navbar;
