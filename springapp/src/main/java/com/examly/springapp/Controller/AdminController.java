//Author->Pavithra
package com.examly.springapp.Controller;

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

@RequestMapping("/admin")
// change the origin link as per your workspace- port-8081 link

@CrossOrigin(origins = "https://8081-ffaeadfaacdbcffbbedebaebcdacaee.project.examly.io")

@RestController
public class AdminController {

    @Autowired
    private StudentService adminService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private InstituteService instituteService;

    // get student by student id
    @GetMapping("/getStudentById/{courseId}")
    public StudentModel getStudentById(@PathVariable Integer studentId) {
        return adminService.getStudentById(studentId);
    }
    
    //method to add student
    @PostMapping("/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel student) {
        return adminService.addStudent(student);
    }

    //method to view student
    @GetMapping("/viewStudent")
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
    @GetMapping("/viewCourse")
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
    @GetMapping("/getcourseById/{courseId}")
    public CourseModel getcourseById(@PathVariable Integer courseId) {
        return courseService.getcourseById(courseId);
    }



    //delete course
    @DeleteMapping("/deleteCourse/{courseId}")
    public String deleteCourse(@PathVariable("courseId") Integer courseId) {
        courseService.deleteCourse(courseId);
        return "Course deleted Successfully";
    }

    // get institutes by institute id
    @GetMapping("/getInstituteById/{instituteId}")
    public InstituteModel getInstituteById(@PathVariable Integer instituteId) {
        return instituteService.getInstituteById(instituteId);
    }

    
    //add institue
    @PostMapping("/addInstitute")
    public InstituteModel addInstitute(@RequestBody InstituteModel institute) {
        return instituteService.addInstitute(institute);
    }

    //view institute
    @GetMapping("/viewInstitutes")
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
    
}
