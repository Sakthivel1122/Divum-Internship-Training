package com.example.divumcrudapplication.repo;

import com.example.divumcrudapplication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository <User, Integer> {

    public User findByEmailId(String emailId);
}
