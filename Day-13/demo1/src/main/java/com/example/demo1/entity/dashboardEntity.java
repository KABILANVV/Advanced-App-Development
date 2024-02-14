package com.example.demo1.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class dashboardEntity {

    @Id
    private int id;
    private int applied;
    private int declined;
    private int accepted;
    
}
