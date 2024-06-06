import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav>
        <Link to="/" className="text-xl">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
