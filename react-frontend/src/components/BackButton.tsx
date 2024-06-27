// src/components/BackButton.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const BackButton: React.FC = () => {
  return (
    <Link to="/" className="text-blue-500 hover:underline mb-4">
      &lt; Back
    </Link>
  );
};

export default BackButton;
