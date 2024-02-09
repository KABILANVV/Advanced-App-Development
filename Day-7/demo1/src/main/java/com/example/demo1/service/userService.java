package com.example.demo1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo1.entity.userEntity;
import com.example.demo1.repo.userRepo;

@Service
public class userService {
	
	@Autowired(required=true)
	userRepo r;
	
	public String add(userEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<userEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public userEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public userEntity updateDetails(userEntity newUser ,int id) 
	{
		userEntity up=r.findById(id).get();		
		 up.setApplicant_name(newUser.getApplicant_name());
		 up.setEvent_name(newUser.getEvent_name());
		 up.setApplicant_address(newUser.getApplicant_address());
		 up.setApplicant_mobile_no(newUser.getApplicant_mobile_no());
		 up.setApplicant_email(newUser.getApplicant_email());
		 up.setDate(newUser.getDate());
		 up.setTime(newUser.getTime());
         return r.saveAndFlush(up);
	}

    }
