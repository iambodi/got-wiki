import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">
        <h1>Games of Thrones Wiki</h1>
      </Link>
    </div>
  );
}

export default Header;
