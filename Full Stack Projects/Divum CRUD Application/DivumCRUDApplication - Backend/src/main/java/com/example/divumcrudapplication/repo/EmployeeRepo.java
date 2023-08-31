package com.example.divumcrudapplication.repo;

import com.example.divumcrudapplication.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository <Employee, Integer> {

    public Employee findByEmailId(String emailId);
}
