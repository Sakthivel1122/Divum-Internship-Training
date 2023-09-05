package com.example.divumcrudapplication.service;

import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.DTO.UserUpdateDTO;
import com.example.divumcrudapplication.entity.User;
import com.example.divumcrudapplication.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public String addUser(UserAddDTO userAddDTO){
        User user = new User(
                userAddDTO.getEmailId(),
                userAddDTO.getFirstName(),
                userAddDTO.getLastName(),
                userAddDTO.getDob(),
                userAddDTO.getMobileNumber(),
                userAddDTO.getAddress()
        );
        userRepo.save(user);
        return "Added Successfully";
    }

    @Override
    public ResponseEntity<List<UserDTO>> getAllUser(){
        List<User> list = userRepo.findAll();
        List<UserDTO> DTOList = new ArrayList<>();

        for (User obj : list){
            UserDTO DTO = new UserDTO(
                    obj.getUserId(),
                    obj.getEmailId(),
                    obj.getFirstName(),
                    obj.getLastName(),
                    obj.getDob(),
                    obj.getMobileNumber(),
                    obj.getAddress(),
                    obj.getLastUpdate()
            );
            DTOList.add(DTO);
        }
        return new ResponseEntity<>(DTOList, HttpStatus.OK);
    }

    @Override
    public String updateUser(UserUpdateDTO userUpdateDTO){
        User user = userRepo.getById(userUpdateDTO.getUserId());

        user.setEmailId(userUpdateDTO.getEmailId());
        user.setFirstName(userUpdateDTO.getFirstName());
        user.setLastName(userUpdateDTO.getLastName());
        user.setDob(userUpdateDTO.getDob());
        user.setMobileNumber(userUpdateDTO.getMobileNumber());
        user.setAddress(userUpdateDTO.getAddress());
        userRepo.save(user);
        return "Updated";
    }

    @Override
    public String deleteUser(int id){
        if(userRepo.existsById(id)){
            userRepo.deleteById(id);
            return "Deleted";
        }
        return "Not found";
    }

    @Override
    public Page<User> getUserWithPagination(int offset, int pageSize){
        return userRepo.findAll(PageRequest.of(offset, pageSize));
    }

    @Override
    public ResponseEntity<Page<User>> getUserWithPaginationAndSorting(int offset, int pageSize){
        return new ResponseEntity<>(userRepo.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(Sort.Direction.DESC,"lastUpdate"))), HttpStatus.OK);
    }

    @Override
    public boolean checkEmailId(String emailid){
        return userRepo.findByEmailId(emailid) == null;
    }
}
