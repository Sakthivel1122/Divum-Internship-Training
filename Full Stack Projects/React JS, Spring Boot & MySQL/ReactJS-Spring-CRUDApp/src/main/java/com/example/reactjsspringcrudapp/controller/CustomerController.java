package com.example.reactjsspringcrudapp.controller;

import com.example.reactjsspringcrudapp.DTO.CustomerDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerSaveDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerUpdateDTO;
import com.example.reactjsspringcrudapp.entity.Customer;
import com.example.reactjsspringcrudapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {


    @Autowired
    private CustomerService customerService;

    @PostMapping("/save")
    public String saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO){
        return customerService.addCustomer(customerSaveDTO);
    }

    @GetMapping("/get")
    public List<CustomerDTO> getAllCustomer(){
        List<CustomerDTO> allCustomer= customerService.getAllCustomer();
        return allCustomer;
    }

    @PutMapping("/update")
    public String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO){
        customerService.updateCustomer(customerUpdateDTO);
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCustomer(@PathVariable("id") int id){
        boolean deleteCustomer = customerService.deleteCustomer(id);
        return deleteCustomer ? "Deleted" : "Failed to delete";
    }
}
