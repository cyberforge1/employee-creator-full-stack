// src/App.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className=" p-4">
      <h1 className="text-3xl font-bold">Welcome to the Employee Manager</h1>
      <div className="mt-4">
        <Link to="/employees" className="mr-4 text-blue-500">
          Go to Employees
        </Link>
        <Link to="/employee-form" className="text-blue-500">
          Go to Employee Form
        </Link>
      </div>
    </div>
  );
};

export default App;
