package com.example.employee_creator.service;

import com.example.employee_creator.exception.ResourceNotFoundException;
import com.example.employee_creator.model.Employee;
import com.example.employee_creator.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhoneNumber(employeeDetails.getPhoneNumber());
        employee.setDepartment(employeeDetails.getDepartment());
        employee.setJobTitle(employeeDetails.getJobTitle());
        employee.setDateOfBirth(employeeDetails.getDateOfBirth());
        employee.setHireDate(employeeDetails.getHireDate());
        employee.setSalary(employeeDetails.getSalary());
        employee.setStatus(employeeDetails.getStatus());

        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        employeeRepository.delete(employee);
    }
}
