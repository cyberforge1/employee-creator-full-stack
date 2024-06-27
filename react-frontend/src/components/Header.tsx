// Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-gray-100 w-full h-60 flex items-center pl-40">
      <h1 className="text-5xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
