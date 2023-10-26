package com.example.ectravelwebapplication.api;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;
import com.example.ectravelwebapplication.DTO.UpdateUserDTO;
import com.example.ectravelwebapplication.DTO.UserDetailsDTO;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/user")
public interface UserApi {
    @PostMapping("/adduser")
    String addUser(@RequestBody AddUserDTO addUserDTO);

    @PostMapping("/userauthentication")
    boolean userAuthentication(@RequestBody LogInDTO logInDTO);

    @GetMapping("getuserdetails/{emailId}")
    UserDetailsDTO getUserDetails(@PathVariable("emailId") String emailId);

    @PutMapping("updateUser")
    String UpdateUser(@RequestBody UpdateUserDTO updateUserDTO);
}
