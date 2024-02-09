
package com.example.demo1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo1.entity.companyEntity;
import com.example.demo1.service.companyService;

@RestController
class companyController {
    @Autowired
    companyService service;
    @PostMapping("/add/company")
public String addDetails(@RequestBody companyEntity m) {
    service.add(m);
    return "company Added" ;
}

@GetMapping("/get/company")
public List<companyEntity> showDetails() {
    return service.getDetails();

}
@GetMapping("/get/company/{id}")
public companyEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);

}
@PutMapping("/update/company/{id}")
public companyEntity Details(@RequestBody companyEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}

@DeleteMapping("/delete/company/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your company id "+id+ " is deleted";
}

}

