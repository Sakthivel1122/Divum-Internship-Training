package com.example.reactjsspringcrudapp.service;

import com.example.reactjsspringcrudapp.DTO.CustomerDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerSaveDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomer(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}
