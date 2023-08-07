package com.example.crudapp.controller;

import com.example.crudapp.domain.Student;
import com.example.crudapp.service.CRUDAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class CRUDAppController {

    @Autowired
    private CRUDAppService service;

    @GetMapping("/")
    public String viewHomePage(Model model){
        List<Student> listStudent = service.listAll();
        model.addAttribute("listStudent",listStudent);
        return "index";
    }

    @GetMapping("/new")
    public String add(Model model){
        model.addAttribute("student",new Student());
        return "new";
    }

    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public String saveStudent(@ModelAttribute("student") Student std){
        service.save(std);
        return "redirect:/";
    }
    @RequestMapping("/edit/{id}")
    public ModelAndView showEditStudentPage(@PathVariable("id") Long id){
        ModelAndView mav = new ModelAndView("new");
        Student std = service.get(id);
        mav.addObject("student",std);
        return mav;
    }

    @RequestMapping("/delete/{id}")
    public String deleteStudent(@PathVariable("id") Long id){
        service.delete(id);
        return "redirect:/";
    }

}
