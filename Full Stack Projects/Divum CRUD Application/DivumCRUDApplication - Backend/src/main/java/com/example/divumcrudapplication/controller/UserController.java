package com.example.divumcrudapplication.controller;


import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.DTO.UserUpdateDTO;
import com.example.divumcrudapplication.entity.User;
import com.example.divumcrudapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody UserAddDTO userAddDTO){
        return userService.addUser(userAddDTO);
    }

    @GetMapping("/getAllUser")
    public ResponseEntity<List<UserDTO>>  getAllUser(){
        ResponseEntity<List<UserDTO>> list = userService.getAllUser();
        return list;
    }
//    @GetMapping("/getUserWithPagination/{offset}/{pageSize}")
//    public ResponseEntity<Page<User>> getUserWithPagination(@PathVariable("offset") int offset, @PathVariable("pageSize") int pageSize){
//        return userService.getUserWithPagination(offset, pageSize);
//    }

    @GetMapping("/getUserWithPaginationAndSorting/{offset}/{pageSize}")
    public ResponseEntity<Page<User>> getUserWithPaginationAndSorting(@PathVariable("offset") int offset, @PathVariable("pageSize") int pageSize){
        return userService.getUserWithPaginationAndSorting(offset, pageSize);
    }
//
//    @GetMapping("/checkEmailId/{emailId}")
//    public boolean checkEmailId(@PathVariable("emailId") String emailId){
//        return userService.checkEmailId(emailId);
//    }

    @PutMapping("/updateUser")
    public String updateUser(@RequestBody UserUpdateDTO userUpdateDTO){
        return userService.updateUser(userUpdateDTO);
    }

    @DeleteMapping("deleteUser/{id}")
    public String deleteUser(@PathVariable("id") int id){
        return userService.deleteUser(id);
    }
}
