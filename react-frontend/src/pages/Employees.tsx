// Employees.tsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import EmployeeHeader from '../components/EmployeeHeader';
import EmployeeList from '../components/EmployeeList';
import { getEmployees } from '../services/employeeService';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
  jobTitle: string;
  dateOfBirth: string;
  hireDate: string;
  salary: number;
  status: string;
}

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch employees');
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full min-h-screen bg-gray-100">
      <Header title="Employees' list" />
      <div className="max-w-4xl mx-auto">
        <EmployeeHeader />
        <EmployeeList employees={employees} />
      </div>
    </div>
  );
};

export default Employees;
