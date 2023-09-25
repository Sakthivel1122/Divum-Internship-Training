package com.example.ectravelwebapplication.service;

import com.example.ectravelwebapplication.DTO.AddUserDTO;
import com.example.ectravelwebapplication.DTO.LogInDTO;
import com.example.ectravelwebapplication.DTO.UpdateUserDTO;
import com.example.ectravelwebapplication.DTO.UserDetailsDTO;
import com.example.ectravelwebapplication.model.User;
import com.example.ectravelwebapplication.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceIMPL implements UserService{
    @Autowired
    UserRepo userRepo;

    @Override
    public String addUser(AddUserDTO addUserDTO){
        User user = new User(
                addUserDTO.getFirstName(),
                addUserDTO.getLastName(),
                addUserDTO.getEmailId(),
                addUserDTO.getMobileNo(),
                addUserDTO.getDob(),
                addUserDTO.getCity(),
                addUserDTO.getState(),
                addUserDTO.getPassword()
        );
        userRepo.save(user);
        return "Added Successfully";
    }

    @Override
    public boolean userAuthentication(LogInDTO logInDTO){
        User user = userRepo.findByEmailId(logInDTO.getEmailId());
        return (user != null && user.getPassword().equals(logInDTO.getPassword()));
    }

    @Override
    public UserDetailsDTO getUserDetails(String emailId) {
        User user = userRepo.findByEmailId(emailId);
        UserDetailsDTO userDetailsDTO = new UserDetailsDTO(
                user.getUserId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmailId(),
                user.getMobileNo(),
                user.getDob(),
                user.getCity(),
                user.getState()
        );
        return userDetailsDTO;
    }

    @Override
    public String updateUser(UpdateUserDTO updateUserDTO){
        User user = userRepo.findById(updateUserDTO.getUserId()).orElse(null);
        if(user != null){
            user.setFirstName(updateUserDTO.getFirstName());
            user.setLastName(updateUserDTO.getLastName());
            user.setDob(updateUserDTO.getDob());
            user.setMobileNo(updateUserDTO.getMobileNo());
            user.setCity(updateUserDTO.getCity());
            user.setState(updateUserDTO.getState());
            userRepo.save(user);
            return "Updated Successfully";
        }
        else {
            return "Update Failed";
        }
    }
}
