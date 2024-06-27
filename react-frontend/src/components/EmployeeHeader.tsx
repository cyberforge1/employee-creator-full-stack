// EmployeeHeader.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate('/employee-form');
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md border-b border-gray-300 w-full">
      <p className="text-gray-700">Please click on ‘Edit’ to find more details of each employee.</p>
      <button
        onClick={handleAddEmployee}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Add employee
      </button>
    </div>
  );
};

export default EmployeeHeader;
