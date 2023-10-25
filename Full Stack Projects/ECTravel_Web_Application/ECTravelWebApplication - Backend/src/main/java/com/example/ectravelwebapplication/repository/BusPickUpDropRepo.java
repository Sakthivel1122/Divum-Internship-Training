package com.example.ectravelwebapplication.repository;

import com.example.ectravelwebapplication.model.BusPickUpDrop;
import org.hibernate.annotations.OrderBy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface BusPickUpDropRepo extends JpaRepository<BusPickUpDrop, Integer> {

    public List<BusPickUpDrop> findAllByBusIdAndType(int busId, boolean type);

    public void deleteAllByBusId(int busId);
}
