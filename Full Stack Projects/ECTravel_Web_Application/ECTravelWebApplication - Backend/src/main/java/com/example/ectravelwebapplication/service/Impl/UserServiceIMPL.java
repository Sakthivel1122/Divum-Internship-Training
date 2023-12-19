package com.example.ectravelwebapplication.service.Impl;

import com.example.ectravelwebapplication.DTO.*;
import com.example.ectravelwebapplication.entity.Passenger;
import com.example.ectravelwebapplication.entity.Seat;
import com.example.ectravelwebapplication.entity.Trip;
import com.example.ectravelwebapplication.entity.User;
import com.example.ectravelwebapplication.repository.service.PassengerRepoService;
import com.example.ectravelwebapplication.repository.service.SeatRepoService;
import com.example.ectravelwebapplication.repository.service.TripRepoService;
import com.example.ectravelwebapplication.repository.service.UserRepoService;
import com.example.ectravelwebapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceIMPL implements UserService {

    @Autowired
    UserRepoService userRepoService;

    @Autowired
    TripRepoService tripRepoService;

    @Override
    public String addUser(AddUserDTO addUserDTO){
        User user = new User(
                addUserDTO.getFirstName(),
                addUserDTO.getLastName(),
                addUserDTO.getEmailId(),
                addUserDTO.getMobileNo(),
                addUserDTO.getDob(),
                addUserDTO.getGender(),
                addUserDTO.getCity(),
                addUserDTO.getState(),
                addUserDTO.getPassword()
        );
        userRepoService.saveUser(user);
        return "Added Successfully";
    }

    @Override
    public ResponseEntity<LoginResponseDTO> userAuthentication(LogInDTO logInDTO){
        User user = userRepoService.findByEmailId(logInDTO.getEmailId());
        if((user != null && user.getPassword().equals(logInDTO.getPassword()))){
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO(user.getUserId(),user.getEmailId(),true);
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
        } else {
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO(null,null,false);
            return new ResponseEntity<>(loginResponseDTO, HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public UserDetailsDTO getUserDetails(String emailId) {
        User user = userRepoService.findByEmailId(emailId);
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
        User user = userRepoService.findById(updateUserDTO.getUserId());
        if(user != null){
            user.setFirstName(updateUserDTO.getFirstName());
            user.setLastName(updateUserDTO.getLastName());
            user.setDob(updateUserDTO.getDob());
            user.setMobileNo(updateUserDTO.getMobileNo());
            user.setCity(updateUserDTO.getCity());
            user.setState(updateUserDTO.getState());
            userRepoService.saveUser(user);
            return "Updated Successfully";
        }
        else {
            return "Update Failed";
        }
    }


}
