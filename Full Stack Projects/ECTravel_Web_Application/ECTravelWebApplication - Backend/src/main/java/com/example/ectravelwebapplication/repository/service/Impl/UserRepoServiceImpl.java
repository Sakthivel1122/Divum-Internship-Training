package com.example.ectravelwebapplication.repository.service.Impl;

import com.example.ectravelwebapplication.entity.User;
import com.example.ectravelwebapplication.repository.UserRepo;
import com.example.ectravelwebapplication.repository.service.UserRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRepoServiceImpl implements UserRepoService {

    @Autowired
    UserRepo userRepo;

    @Override
    public void saveUser(User user){
        userRepo.save(user);
    }

    @Override
    public User findByEmailId(String emailId) {
        return userRepo.findByEmailId(emailId);
    }

    @Override
    public User findById(int userId) {
        return userRepo.findById(userId).orElse(null);
    }
}
