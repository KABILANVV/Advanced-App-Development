package com.example.demo1.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo1.entity.companyEntity;
import com.example.demo1.repo.companyRepo;
@Service
public class companyService {	
	@Autowired(required=true)
	companyRepo r;
	
	public String add(companyEntity e)
	{
		r.save(e);
		return "Added";
	}
	
	public List<companyEntity> getDetails()
	{
		return r.findAll();
	}
		
	public void deleteDetails(int id) {
		r.deleteById(id);
	}
	
	
	
	public companyEntity getDetail(int id) {
	
		return r.findById(id).get();
	}
	
	public companyEntity updateDetails(companyEntity newUser ,int id) 
	{
		companyEntity up=r.findById(id).get();		
		 up.setTitle(newUser.getTitle());
		 up.setCompany_name(newUser.getCompany_name());
		 up.setImage_url(newUser.getImage_url());
		 up.setCompany_location(newUser.getCompany_location());
		 up.setDescription(newUser.getDescription());
         return r.saveAndFlush(up);
	}

    }
