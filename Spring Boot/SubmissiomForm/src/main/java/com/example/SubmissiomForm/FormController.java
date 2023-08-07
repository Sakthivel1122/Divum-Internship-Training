package com.example.SubmissiomForm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
public class FormController {

    @Autowired
    CustomerRepo repo;
    @RequestMapping("/")
    public String formPage(){
        return "formPage";
    }

    @RequestMapping("/details")
    public String details(Customers customers){
        repo.save(customers);
        return "formPage";
    }

    @RequestMapping("/getdetails")
    public String getDetails(){
        return "viewCustomers";
    }

    @PostMapping("/retrive")
    public ModelAndView retriveDetails(@RequestParam("cId")int cid){
        ModelAndView mv = new ModelAndView("retrive");
        Customers customers = repo.findById(cid).orElse(null);
        if(customers != null)
            mv.addObject(customers);
        return mv;
    }

    @RequestMapping("/allcustomers")
    @ResponseBody
    public List<Customers> getAllCustomers(){
        return repo.findAll();
    }

    @RequestMapping("/customer/{cid}")
    @ResponseBody
    public Optional<Customers> getCustomer(@PathVariable("cid") int cid){
        return repo.findById(cid);
    }

    @PostMapping("/allcustomers")
    public Customers postCustomers(@RequestBody Customers customers){
        repo.save(customers);
        return customers;
    }

    @DeleteMapping("/delete/{cid}")
    public String deleteCustomer(@PathVariable("cid") int cid){
        Customers cust = repo.getOne(cid);
        repo.delete(cust);
        return "delete success";
    }

    @PutMapping(path = "/update",consumes = "application/json")
    public void deleteCustomer(@RequestBody Customers customers){
        repo.save(customers);
//        return customers;
    }
}
