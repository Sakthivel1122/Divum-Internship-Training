package com.example.ectravelwebapplication.controller;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;
import com.example.ectravelwebapplication.DTO.UpdateUserDTO;
import com.example.ectravelwebapplication.DTO.UserDetailsDTO;
import com.example.ectravelwebapplication.api.UserApi;
import com.example.ectravelwebapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController implements UserApi {

    @Autowired
    UserService userService;

    @Override
    public String addUser(@RequestBody AddUserDTO addUserDTO){
        return userService.addUser(addUserDTO);
    }

    @Override
    public boolean userAuthentication(@RequestBody LogInDTO logInDTO){
        return userService.userAuthentication(logInDTO);
    }

    @Override
    public UserDetailsDTO getUserDetails(@PathVariable("emailId") String emailId){
        return userService.getUserDetails(emailId);
    }

    @Override
    public String UpdateUser(@RequestBody UpdateUserDTO updateUserDTO){
        return userService.updateUser(updateUserDTO);
    }
}
