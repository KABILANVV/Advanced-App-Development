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
import com.example.demo1.service.dashService;
import com.example.demo1.entity.dashboardEntity;
@RestController

class dashController {
@Autowired
dashService service;
@PostMapping("/add/dash")
public String addDetails(@RequestBody dashboardEntity m) {
    service.add(m);
    return "dashboard updated" ;
}
@GetMapping("/get/dash")
public List<dashboardEntity> showDetails() {
    return service.getDetails();
}
@GetMapping("/get/dash/{id}")
public dashboardEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);
}
@PutMapping("/update/dash/{id}")
public dashboardEntity Details(@RequestBody dashboardEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
@DeleteMapping("/delete/dash/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your dasbboard "+id+ " is deleted";
}
}

