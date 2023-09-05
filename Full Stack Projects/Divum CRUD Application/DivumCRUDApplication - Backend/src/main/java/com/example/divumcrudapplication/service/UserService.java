package com.example.divumcrudapplication.service;

import com.example.divumcrudapplication.DTO.UserAddDTO;
import com.example.divumcrudapplication.DTO.UserDTO;
import com.example.divumcrudapplication.DTO.UserUpdateDTO;
import com.example.divumcrudapplication.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    String addUser(UserAddDTO userAddDTO);

    ResponseEntity<List<UserDTO>> getAllUser();

    String updateUser(UserUpdateDTO userUpdateDTO);

    String deleteUser(int id);

    Page<User> getUserWithPagination(int offset, int pageSize);

    ResponseEntity<Page<User>> getUserWithPaginationAndSorting(int offset, int pageSize);

    boolean checkEmailId(String emailid);
}
