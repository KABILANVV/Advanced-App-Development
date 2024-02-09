package com.example.demo1.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo1.entity.dashboardEntity;
import com.example.demo1.repo.dashRepo;
@Service
public class dashService {	
	@Autowired(required=true)
	dashRepo r;
	
	public String add(dashboardEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<dashboardEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	public dashboardEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public dashboardEntity updateDetails(dashboardEntity newUser ,int id) 
	{
		dashboardEntity up=r.findById(id).get();		
		 up.setApplied(newUser.getApplied());
		 up.setAccepted(newUser.getAccepted());
		 up.setDeclined(newUser.getDeclined());
         return r.saveAndFlush(up);
	}

    }
