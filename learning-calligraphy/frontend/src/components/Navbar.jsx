import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/collectionone">Collection One</Link>
      <Link to="/collectiontwo">Collection Two</Link>
      <Link to="/collectionthree">Collection Three</Link>
      <Link to="/newvideo">New Video</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
