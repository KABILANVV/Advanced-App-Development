package com.example.demo1.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo1.entity.dashboardEntity;
@Repository
public interface dashRepo extends JpaRepository<dashboardEntity, Integer>{

}
