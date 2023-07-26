//Author->Pavithra
package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Model.StudentModel;
import com.examly.springapp.Service.CourseService;
import com.examly.springapp.Service.InstituteService;
import com.examly.springapp.Service.StudentService;
import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Service.AdmissionService;

@RequestMapping("/admin")
// change the origin link as per your workspace- port-8081 link
@CrossOrigin(origins = "https://8081-ecefccaeffbaddbcffbbedebaebcdacaee.project.examly.io")

@RestController
public class AdminController {

    @Autowired
    private StudentService adminService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private InstituteService instituteService;

    @Autowired
    public AdmissionService admissionService;

    // get student by student id
    @GetMapping("/student/{id}")
    public StudentModel getStudentById(@PathVariable Integer id) {
        return adminService.getStudentById(id);
    }
    
    //method to add student
    @PostMapping("/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel student) {
        return adminService.addStudent(student);
    }

    //method to view student
    @GetMapping("/student")
    public List<StudentModel> viewStudent() {
        return adminService.viewStudent();
    }

    //method to edit student
    @PutMapping("/editStudent/{studentId}")
    public StudentModel editStudent(@PathVariable("studentId") Integer studentId,
                                    @RequestBody StudentModel student) {
        return adminService.editStudent(studentId,student);
    }

    //method to delete student
    @DeleteMapping("/deleteStudent/{studentId}")
    public String deleteStudent(@PathVariable("studentId") Integer studentId) {
        adminService.deleteStudent(studentId);
        return "Student deleted Successfully";
    }

    // get course by course id
    @GetMapping("/getCourseById/{courseId}")
    public CourseModel getCourseById(@PathVariable Integer courseId) {
        return courseService.getcourseById(courseId);
    }

    //view the course list by instituteId
    @GetMapping("/findByInstituteId/{instituteId}")
    public List<CourseModel> findByInstituteId(@PathVariable int instituteId) {
        return courseService.findByInstituteId(instituteId);
    }

    //add course
    @PostMapping("/addCourse")
    public CourseModel addCourse(@RequestBody CourseModel course) {
        return courseService.addCourse(course);
    }
    
    //view course
    @GetMapping("/courses")
    public List<CourseModel> viewCourse() {
        return courseService.viewCourse();
    }

    //edit course
    @PutMapping("/editCourse/{courseId}")
    public CourseModel editCourse(@PathVariable("courseId") Integer courseId,
                    @RequestBody CourseModel course) {
        return courseService.editCourse(courseId,course);
    }

    // get course by courseId
    @GetMapping("/courses/{id}")
    public CourseModel getcourseById(@PathVariable Integer id) {
        return courseService.getcourseById(id);
    }

    //delete course
    @DeleteMapping("/deleteCourse/{courseId}")
    public String deleteCourse(@PathVariable("courseId") Integer courseId) {
        courseService.deleteCourse(courseId);
        return "Course deleted Successfully";
    }

    // get institutes by institute id
    @GetMapping("/institute/{id}")
    public InstituteModel getInstituteById(@PathVariable Integer id) {
        return instituteService.getInstituteById(id);
    }

    
    //add institue
    @PostMapping("/addInstitute")
    public InstituteModel addInstitute(@RequestBody InstituteModel institute) {
        return instituteService.addInstitute(institute);
    }

    //view institute
    @GetMapping("/institute")
    public List<InstituteModel> viewInstitute() {
        return instituteService.viewInstitute();
    }

    //edit institute
    @PutMapping("/editInstitute/{instituteId}")
    public InstituteModel editInstitute(@PathVariable("instituteId") Integer instituteId,
                                        @RequestBody InstituteModel institute) {
        return instituteService.editInstitute(instituteId,institute);
    }

    //delete institute
    @DeleteMapping("/deleteInstitutes/{instituteId}")
    public String deleteInstitute(@PathVariable("instituteId") Integer instituteId) {
        instituteService.deleteInstitute(instituteId);
        return "Institute deleted Successfully";
    }

    //view admission
    @GetMapping("/admission")
    public List<AdmissionModel> viewAllAdmission()
    {
        return admissionService.getDetails();
    }

    //add admissin
    @PostMapping("/addAdmission")
    public AdmissionModel addAdmission(@RequestBody AdmissionModel admissionmodel)
    {
        return admissionService.saveDetail(admissionmodel);
    }

    //edit admission
    @PutMapping("/editAdmission/{id}")
    public AdmissionModel editAddmission(@PathVariable ("id") int id,@RequestBody AdmissionModel admissionmodel)
    {
        return admissionService.updateDetails( id,admissionmodel);
    }

     //view admission by Id
     @GetMapping("/admission/{id}")
     public AdmissionModel viewAdmissionById(@PathVariable ("id") int id)
     {
         return admissionService.getDetailsById(id);
     }

     //view admission by Id
    @GetMapping("/getAdmissionById/{studentId}")
    public AdmissionModel getAdmissionBystudentId(@PathVariable ("studentId") int studentId)
    {
        return admissionService.findByStudentId(studentId);
    }

    // incrementing students enrolled
    @GetMapping("/incrementstudents/{courseId}")
    public int incrementStudents(@PathVariable("courseId") Integer courseId)
    {
        return courseService.incrementStudents(courseId);
    }
   
    // decrementing students enrolled
    @GetMapping("/decrementstudents/{courseId}")
    public int decrementStudents(@PathVariable("courseId") Integer courseId)
    {
        return courseService.decrementStudents(courseId);
    }
     


    
}
