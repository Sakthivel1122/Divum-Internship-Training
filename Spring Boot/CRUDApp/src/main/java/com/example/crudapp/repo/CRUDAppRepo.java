package com.example.crudapp.repo;

import com.example.crudapp.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CRUDAppRepo extends JpaRepository<Student, Long> {
}
