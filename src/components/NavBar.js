import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bugs">Bugs</Link>
        </li>
        <li>
          <Link to="/add-bug">Add Bug</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
