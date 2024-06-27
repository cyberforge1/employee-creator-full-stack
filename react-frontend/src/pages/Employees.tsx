// Employees.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
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
      <div className="p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">First Name</th>
              <th className="py-2">Last Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone Number</th>
              <th className="py-2">Department</th>
              <th className="py-2">Job Title</th>
              <th className="py-2">Hire Date</th>
              <th className="py-2">Salary</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2">{employee.firstName}</td>
                <td className="py-2">{employee.lastName}</td>
                <td className="py-2">{employee.email}</td>
                <td className="py-2">{employee.phoneNumber}</td>
                <td className="py-2">{employee.department}</td>
                <td className="py-2">{employee.jobTitle}</td>
                <td className="py-2">{new Date(employee.hireDate).toLocaleDateString()}</td>
                <td className="py-2">{employee.salary}</td>
                <td className="py-2">{employee.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
