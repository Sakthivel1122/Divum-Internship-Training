package com.example.reactjsspringcrudapp.service;

import com.example.reactjsspringcrudapp.DTO.CustomerDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerSaveDTO;
import com.example.reactjsspringcrudapp.DTO.CustomerUpdateDTO;
import com.example.reactjsspringcrudapp.entity.Customer;
import com.example.reactjsspringcrudapp.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceIMPL implements CustomerService{

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public String addCustomer(CustomerSaveDTO customerSaveDTO) {
        Customer customer = new Customer(
                customerSaveDTO.getCustomerName(),
                customerSaveDTO.getCustomerAddress(),
                customerSaveDTO.getMobile()
        );
        customerRepo.save(customer);
        return customer.getCustomerName();
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> list = customerRepo.findAll();
        List<CustomerDTO> DTOList = new ArrayList<>();

        for (Customer obj: list) {
            CustomerDTO DTO = new CustomerDTO(
                    obj.getCustomerId(),
                    obj.getCustomerName(),
                    obj.getCustomerAddress(),
                    obj.getMobile()
            );
            DTOList.add(DTO);
        }
        return DTOList;
    }

    @Override
    public String updateCustomer(CustomerUpdateDTO customerUpdateDTO) {
        if(customerRepo.existsById(customerUpdateDTO.getCustomerId())){
            Customer customer = customerRepo.getById(customerUpdateDTO.getCustomerId());

            customer.setCustomerName(customerUpdateDTO.getCustomerName());
            customer.setCustomerAddress(customerUpdateDTO.getCustomerAddress());
            customer.setMobile(customerUpdateDTO.getMobile());

            customerRepo.save(customer);
        }
        else {
            System.out.println("Customer ID not found");
        }
        return null;
    }

    @Override
    public boolean deleteCustomer(int id) {
        if(customerRepo.existsById(id)){
            customerRepo.deleteById(id);
            return true;
        }
        System.out.println("Customer ID not found");
        return false;
    }
}
