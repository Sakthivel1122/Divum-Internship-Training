package com.example.divumcrudapplication.controller;


import com.example.divumcrudapplication.DTO.EmployeeAddDTO;
import com.example.divumcrudapplication.DTO.EmployeeDTO;
import com.example.divumcrudapplication.DTO.EmployeeUpdateDTO;
import com.example.divumcrudapplication.entity.Employee;
import com.example.divumcrudapplication.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public String addEmployee(@RequestBody EmployeeAddDTO employeeAddDTO){
        return employeeService.addEmployee(employeeAddDTO);
    }

    @GetMapping("/getAllEmployee")
    public List<EmployeeDTO> getAllEmployee(){
        List<EmployeeDTO> list = employeeService.getAllEmployee();
        return list;
    }

    @GetMapping("/getEmployeeWithPagination/{offset}/{pageSize}")
    public Page<Employee> getEmployeeWithPagination(@PathVariable("offset") int offset, @PathVariable("pageSize") int pageSize){
        return employeeService.getEmployeeWithPagination(offset, pageSize);
    }

    @GetMapping("/getEmployeeWithPaginationAndSorting/{offset}/{pageSize}")
    public Page<Employee> getEmployeeWithPaginationAndSorting(@PathVariable("offset") int offset, @PathVariable("pageSize") int pageSize){
        return employeeService.getEmployeeWithPaginationAndSorting(offset, pageSize);
    }

    @GetMapping("/checkEmailId/{emailId}")
    public boolean checkEmailId(@PathVariable("emailId") String emailId){
        return employeeService.checkEmailId(emailId);
    }

    @PutMapping("/updateEmployee")
    public String updateEmployee(@RequestBody EmployeeUpdateDTO employeeUpdateDTO){
        return employeeService.updateEmployee(employeeUpdateDTO) ? "Updated" : "Error";
    }

    @DeleteMapping("deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable("id") int id){
        return employeeService.deleteEmployee(id) ? "Deleted" : "Not found";
    }
}
