package com.example.ectravelwebapplication.repository.service;

import com.example.ectravelwebapplication.entity.Bus;
import com.example.ectravelwebapplication.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserRepoService {

    void saveUser(User user);

    User findByEmailId(String emailId);

    User findById(int userId);
}
