package com.example.demo1.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo1.service.userService;
import com.example.demo1.entity.userEntity;
@RestController
@CrossOrigin(origins = "http://localhost:5173/")
class userController {
    @Autowired
    userService service;
    @PostMapping("/add/apply")
public String addDetails(@RequestBody userEntity m) {
    service.add(m);
    return "application Submitted" ;
}
@GetMapping("/get/apply")
public List<userEntity> showDetails() {
    return service.getDetails();
}
@GetMapping("/get/apply/{id}")
public userEntity showDetail(@PathVariable int id) {
    return service.getDetail(id);
}
@PutMapping("/update/apply/{id}")
public userEntity Details(@RequestBody userEntity newUser ,@PathVariable int id)
{
     return service.updateDetails(newUser,id);
}
@DeleteMapping("/delete/apply/{id}")
public String delete(@PathVariable int id )
{
    service.deleteDetails(id);
    return "your applied job id "+id+ " is deleted";
}
}
