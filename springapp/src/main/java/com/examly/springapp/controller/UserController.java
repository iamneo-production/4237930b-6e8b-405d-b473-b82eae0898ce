package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Service.AdmissionService;
import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Service.InstituteService;

import com.examly.springapp.Service.CourseService;
import com.examly.springapp.Service.InstituteService;
import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Model.StudentModel;
import com.examly.springapp.Service.StudentService;


@RequestMapping
@RestController
// change the origin link as per your workspace- port-8081 link
@CrossOrigin(origins = "https://8081-fddecffdbcffbbedebaebcdacaee.project.examly.io")

public class UserController {
    
    @Autowired
    public AdmissionService admissionService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private InstituteService instituteService;

    @Autowired
    private StudentService adminService;

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

    //view admission by Id
    @GetMapping("/user/viewAdmission/{id}")
    public AdmissionModel viewAdmissionById(@PathVariable ("id") int id)
    {
        return admissionService.getDetailsById(id);
    }


    //view institute
    @GetMapping("/user/viewInstitutes")
    public List<InstituteModel> viewInstitute() {
        return instituteService.viewInstitute();
    }

    //view the course list by instituteId
    @GetMapping("/user/findByInstituteId/{instituteId}")
    public List<CourseModel> findByInstituteId(@PathVariable int instituteId) {
        return courseService.findByInstituteId(instituteId);
    }
    

     // view admission by userId
     @GetMapping("/user/getByUserId/{id}")
     public List<AdmissionModel> getByUserId(@PathVariable ("id") int id)
    {
       return admissionService.getByuserId(id);
     }

      // get course by course id
     @GetMapping("/user/getCourseById/{courseId}")
     public CourseModel getCourseById(@PathVariable Integer courseId) {
        return courseService.getcourseById(courseId);
     }

      // get institutes by institute id
      @GetMapping("/user/getInstituteById/{instituteId}")
      public InstituteModel getInstituteById(@PathVariable Integer instituteId) {
          return instituteService.getInstituteById(instituteId);
     }

     // get student by student id
    @GetMapping("/user/getStudentById/{studentId}")
    public StudentModel getStudentById(@PathVariable Integer studentId) {
        return adminService.getStudentById(studentId);
    }
   
    
    //method to add student
    @PostMapping("/user/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel student) {
        return adminService.addStudent(student);
    }

    //method to edit student
    @PutMapping("/user/editStudent/{studentId}")
    public StudentModel editStudent(@PathVariable("studentId") Integer studentId,
                                    @RequestBody StudentModel student) {
        return adminService.editStudent(studentId,student);
    }

     // get student by userId
     @GetMapping("/user/getStudentByuserId/{userId}")
     public StudentModel findStudentByUserId(@PathVariable Integer userId) {
         return adminService.findByStudentUserId(userId);
     }
    


}
