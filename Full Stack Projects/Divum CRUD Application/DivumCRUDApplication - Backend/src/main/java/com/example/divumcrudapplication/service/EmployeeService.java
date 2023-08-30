package com.example.divumcrudapplication.service;

import com.example.divumcrudapplication.DTO.EmployeeAddDTO;
import com.example.divumcrudapplication.DTO.EmployeeDTO;
import com.example.divumcrudapplication.DTO.EmployeeUpdateDTO;
import com.example.divumcrudapplication.entity.Employee;
import org.springframework.data.domain.Page;

import java.util.List;

public interface EmployeeService{
    String addEmployee(EmployeeAddDTO employeeAddDTO);

    List<EmployeeDTO> getAllEmployee();

    boolean updateEmployee(EmployeeUpdateDTO employeeUpdateDTO);

    boolean deleteEmployee(int id);

    Page<Employee> getEmployeeWithPagination(int offset, int pageSize);

    Page<Employee> getEmployeeWithPaginationAndSorting(int offset, int pageSize);

    boolean checkEmailId(String emailid);
}
