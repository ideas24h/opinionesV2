import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
          <MessageSquare className="mr-2" />
          opiniones.app
        </Link>
        <nav>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 ml-4">
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;