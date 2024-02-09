package com.example.demo1.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo1.entity.companyEntity;
@Repository
public interface companyRepo extends JpaRepository<companyEntity, Integer>{

}
