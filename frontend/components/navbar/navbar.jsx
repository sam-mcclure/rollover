import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, clearPosts }) => (
  <div className="sidebar-nav">
    <strong className="username">{currentUser.username}</strong>
    <Link to="/dashboard" onClick={() => clearPosts()}>
      <i className="fa fa-home" />Dashboard
    </Link>
    <Link to="/likes" onClick={() => clearPosts()}>
      <i className="fa fa-heart" aria-hidden="true" />Likes
    </Link>
    
      <Link to={`/users/${currentUser.id}`} onClick={() => clearPosts()}>
        <i className="fa fa-user" aria-hidden="true" />Posts
      </Link>
  </div>
);

export default Navbar;
