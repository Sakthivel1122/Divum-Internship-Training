package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;

public interface UserService {
    String addUser(AddUserDTO addUserDTO);

    boolean userAuthentication(LogInDTO logInDTO);
}
