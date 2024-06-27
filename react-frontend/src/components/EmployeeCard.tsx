// EmployeeCard.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../services/employeeService';

interface EmployeeCardProps {
  employee: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    department: string;
    jobTitle: string;
    hireDate: string;
    salary: number;
    status: string;
  };
  onEmployeeDeleted: (id: number) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEmployeeDeleted }) => {
  const navigate = useNavigate();

  const handleRemove = async () => {
    try {
      await deleteEmployee(employee.id);
      onEmployeeDeleted(employee.id);
    } catch (error) {
      console.error('Failed to delete employee', error);
    }
  };

  const handleEdit = () => {
    navigate(`/employee-form/${employee.id}`);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md mb-4 flex justify-between items-center border border-gray-300 w-full">
      <div>
        <h2 className="text-lg font-bold text-black">{employee.firstName} {employee.lastName}</h2>
        <p className="text-black">{employee.status} - {employee.jobTitle}</p>
        <p className="text-black">{employee.email}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={handleEdit} className="text-blue-500 hover:underline">Edit</button>
        <button onClick={handleRemove} className="text-blue-500 hover:underline">Remove</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
