package com.examly.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Service.AdmissionService;

@RestController
public class UserController {
    @Autowired
    public AdmissionService admissionService;

    //add admissin
    @PostMapping("/user/addAdmission")
    public AdmissionModel addAdmission(@RequestBody AdmissionModel admissionmodel)
    {
        return admissionService.saveDetail(admissionmodel);
    }

    //view admission
    @GetMapping("/user/viewAdmission")
    public List<AdmissionModel> viewAllDetails()
    {
        return admissionService.getDetails();

    }

    //edit admission
    @PutMapping("/user/editAdmission/{id}")
    public AdmissionModel editAddmission(@PathVariable ("id") int id,@RequestBody AdmissionModel admissionmodel)
    {
        return admissionService.updateDetails( id,admissionmodel);
    }

    //delete admision

    @DeleteMapping("/user/deleteAdmission/{id}")
    public String deleteAdmision(@PathVariable ("id") int id)
    {
            return admissionService.deleteDetails(id);
    }

    
   //extract status attribute
  @GetMapping("/user/viewStatus/{id}")
   public String findStatus(@PathVariable int id)
 {
     return admissionService.getStatusValue(id);
   }

}