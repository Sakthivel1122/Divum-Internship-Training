package com.example.divumcrudapplication.service;

import com.example.divumcrudapplication.DTO.EmployeeAddDTO;
import com.example.divumcrudapplication.DTO.EmployeeDTO;
import com.example.divumcrudapplication.DTO.EmployeeUpdateDTO;
import com.example.divumcrudapplication.entity.Employee;
import com.example.divumcrudapplication.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceIMPL implements EmployeeService{
    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public String addEmployee(EmployeeAddDTO employeeAddDTO){
        Employee employee = new Employee(
                employeeAddDTO.getEmailId(),
                employeeAddDTO.getFirstName(),
                employeeAddDTO.getLastName(),
                employeeAddDTO.getDob(),
                employeeAddDTO.getMobileNumber(),
                employeeAddDTO.getAddress()
        );
        employeeRepo.save(employee);
        return employee.toString();
    }

    @Override
    public List<EmployeeDTO> getAllEmployee(){
        List<Employee> list = employeeRepo.findAll(Sort.by(Sort.Direction.DESC,"lastUpdate"));
        List<EmployeeDTO> DTOList = new ArrayList<>();

        int count = 0;
        for (Employee obj : list){
            if(count == 10)break;
            EmployeeDTO DTO = new EmployeeDTO(
                    obj.getEmployeeId(),
                    obj.getEmailId(),
                    obj.getFirstName(),
                    obj.getLastName(),
                    obj.getDob(),
                    obj.getMobileNumber(),
                    obj.getAddress(),
                    obj.getLastUpdate()
            );
            DTOList.add(DTO);
            count++;
        }
        return DTOList;
    }

    @Override
    public boolean updateEmployee(EmployeeUpdateDTO employeeUpdateDTO){
        Employee employee = employeeRepo.getById(employeeUpdateDTO.getEmployeeId());

        employee.setEmailId(employeeUpdateDTO.getEmailId());
        employee.setFirstName(employeeUpdateDTO.getFirstName());
        employee.setLastName(employeeUpdateDTO.getLastName());
        employee.setDob(employeeUpdateDTO.getDob());
        employee.setMobileNumber(employeeUpdateDTO.getMobileNumber());
        employee.setAddress(employeeUpdateDTO.getAddress());
        System.out.println(employeeUpdateDTO.getAddress());
        System.out.println(employee.getAddress());
        employeeRepo.save(employee);
        return true;
    }

    @Override
    public boolean deleteEmployee(int id){
        if(employeeRepo.existsById(id)){
            employeeRepo.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Page<Employee> getEmployeeWithPagination(int offset, int pageSize){
        return employeeRepo.findAll(PageRequest.of(offset, pageSize));
    }

    @Override
    public Page<Employee> getEmployeeWithPaginationAndSorting(int offset, int pageSize){
        return employeeRepo.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(Sort.Direction.DESC,"lastUpdate")));
    }

    @Override
    public boolean checkEmailId(String emailid){
        return employeeRepo.findByEmailId(emailid) == null;
    }
}
