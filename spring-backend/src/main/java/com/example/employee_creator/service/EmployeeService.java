package com.example.employee_creator.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee_creator.dto.EmployeeDTO;
import com.example.employee_creator.exception.ResourceNotFoundException;
import com.example.employee_creator.model.Employee;
import com.example.employee_creator.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }

    public Optional<EmployeeDTO> getEmployeeById(Long id) {
        return employeeRepository.findById(id)
            .map(this::convertToDTO);
    }

    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = convertToEntity(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);
        return convertToDTO(savedEmployee);
    }

    public EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO) {
        Employee existingEmployee = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        existingEmployee.setFirstName(employeeDTO.getFirstName());
        existingEmployee.setLastName(employeeDTO.getLastName());
        existingEmployee.setEmail(employeeDTO.getEmail());
        existingEmployee.setPhoneNumber(employeeDTO.getPhoneNumber());
        existingEmployee.setDepartment(employeeDTO.getDepartment());
        existingEmployee.setJobTitle(employeeDTO.getJobTitle());
        existingEmployee.setDateOfBirth(employeeDTO.getDateOfBirth());
        existingEmployee.setHireDate(employeeDTO.getHireDate());
        existingEmployee.setSalary(employeeDTO.getSalary());
        existingEmployee.setStatus(Employee.Status.valueOf(Optional.ofNullable(employeeDTO.getStatus()).orElse("ACTIVE")));
        existingEmployee.setResidentialAddress(employeeDTO.getResidentialAddress());
        existingEmployee.setStartDate(employeeDTO.getStartDate());
        existingEmployee.setFinishDate(employeeDTO.getFinishDate());
        existingEmployee.setOngoing(employeeDTO.getOngoing());
        existingEmployee.setEmploymentType(Employee.EmploymentType.valueOf(Optional.ofNullable(employeeDTO.getEmploymentType()).orElse("FULL_TIME")));
        existingEmployee.setHoursPerWeek(employeeDTO.getHoursPerWeek());

        final Employee updatedEmployee = employeeRepository.save(existingEmployee);
        return convertToDTO(updatedEmployee);
    }

    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + id));
        employeeRepository.delete(employee);
    }

    private EmployeeDTO convertToDTO(Employee employee) {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(employee.getId());
        employeeDTO.setFirstName(employee.getFirstName());
        employeeDTO.setLastName(employee.getLastName());
        employeeDTO.setEmail(employee.getEmail());
        employeeDTO.setPhoneNumber(employee.getPhoneNumber());
        employeeDTO.setDepartment(employee.getDepartment());
        employeeDTO.setJobTitle(employee.getJobTitle());
        employeeDTO.setDateOfBirth(employee.getDateOfBirth());
        employeeDTO.setHireDate(employee.getHireDate());
        employeeDTO.setSalary(employee.getSalary());
        employeeDTO.setStatus(employee.getStatus().name());
        employeeDTO.setResidentialAddress(employee.getResidentialAddress());
        employeeDTO.setStartDate(employee.getStartDate());
        employeeDTO.setFinishDate(employee.getFinishDate());
        employeeDTO.setOngoing(employee.getOngoing());
        employeeDTO.setEmploymentType(employee.getEmploymentType().name());
        employeeDTO.setHoursPerWeek(employee.getHoursPerWeek());
        return employeeDTO;
    }

    private Employee convertToEntity(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        employee.setPhoneNumber(employeeDTO.getPhoneNumber());
        employee.setDepartment(employeeDTO.getDepartment());
        employee.setJobTitle(employeeDTO.getJobTitle());
        employee.setDateOfBirth(employeeDTO.getDateOfBirth());
        employee.setHireDate(employeeDTO.getHireDate());
        employee.setSalary(employeeDTO.getSalary());
        employee.setStatus(Employee.Status.valueOf(Optional.ofNullable(employeeDTO.getStatus()).orElse("ACTIVE")));
        employee.setResidentialAddress(employeeDTO.getResidentialAddress());
        employee.setStartDate(employeeDTO.getStartDate());
        employee.setFinishDate(employeeDTO.getFinishDate());
        employee.setOngoing(employeeDTO.getOngoing());
        employee.setEmploymentType(Employee.EmploymentType.valueOf(Optional.ofNullable(employeeDTO.getEmploymentType()).orElse("FULL_TIME")));
        employee.setHoursPerWeek(employeeDTO.getHoursPerWeek());
        return employee;
    }
}
