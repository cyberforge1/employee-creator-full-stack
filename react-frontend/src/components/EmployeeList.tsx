// src/components/EmployeeList.tsx
import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

interface Employee {
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
  residentialAddress: string;
  startDate: string;
  finishDate: string;
  ongoing: boolean;
  employmentType: string;
  hoursPerWeek: number;
}

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  const [employeeList, setEmployeeList] = useState<Employee[]>(employees);

  const handleEmployeeDeleted = (id: number) => {
    setEmployeeList(employeeList.filter(employee => employee.id !== id));
  };

  return (
    <div className="p-4 w-full">
      {employeeList.map((employee) => (
        <EmployeeCard 
          key={employee.id} 
          employee={employee} 
          onEmployeeDeleted={handleEmployeeDeleted} 
        />
      ))}
    </div>
  );
};

export default EmployeeList;
