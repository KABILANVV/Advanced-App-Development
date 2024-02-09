package com.example.demo1.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo1.entity.userEntity;
@Repository
public interface userRepo extends JpaRepository<userEntity, Integer>{

}
