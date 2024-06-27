// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-100 w-full h-60 flex items-center pl-40">
      <div className="flex items-center">
        <h1 className="text-5xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
