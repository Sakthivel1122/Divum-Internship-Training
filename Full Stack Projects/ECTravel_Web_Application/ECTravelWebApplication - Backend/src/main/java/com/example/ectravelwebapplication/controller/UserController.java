package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;
import com.example.ectravelwebapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    UserService userService;
    @PostMapping("/adduser")
    public String addUser(@RequestBody AddUserDTO addUserDTO){
        return userService.addUser(addUserDTO);
    }

    @PostMapping("/userauthentication")
    public boolean userAuthentication(@RequestBody LogInDTO logInDTO){
        System.out.println(logInDTO.toString());
        return userService.userAuthentication(logInDTO);
    }
}
