package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;
import com.example.ectravelwebapplication.DTO.UpdateUserDTO;
import com.example.ectravelwebapplication.DTO.UserDetailsDTO;

public interface UserService {
    String addUser(AddUserDTO addUserDTO);

    boolean userAuthentication(LogInDTO logInDTO);

    UserDetailsDTO getUserDetails(String emailId);

    String updateUser(UpdateUserDTO updateUserDTO);
}
