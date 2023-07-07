package com.examly.springapp.Model;

//import java.sql.Date;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="admission")
public class AdmissionModel {
    
    //declaring table entity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "admission_id")
    private int admissionId;
    private int instituteId;
    private int courseId;
    private int studentId;
    private String status;
    private LocalDate courseStartDate;
    private LocalDate courseEndDate;
    private int userId;
    //default constructor
     public AdmissionModel() {
    }

    

    public AdmissionModel(int admissionId, int instituteId, int courseId, int studentId, String status,
            LocalDate courseStartDate, LocalDate courseEndDate,int userId) {
        this.admissionId = admissionId;
        this.instituteId = instituteId;
        this.courseId = courseId;
        this.studentId = studentId;
        this.status = status;
        this.courseStartDate = courseStartDate;
        this.courseEndDate = courseEndDate;
        this.userId=userId;
    }



    public  int getAdmissionId() {
        return admissionId;
    }
    public void setAdmissionId(int admissionId) {
        this.admissionId = admissionId;
    }
    public int getInstituteId() {
        return instituteId;
    }
    public void setInstituteId(int instituteId) {
        this.instituteId = instituteId;
    }
    public int getCourseId() {
        return courseId;
    }
    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public LocalDate getCourseStartDate() {
        return courseStartDate;
    }
    public void setCourseStartDate(LocalDate courseStartDate) {
        this.courseStartDate = courseStartDate;
    }
    public LocalDate getCourseEndDate() {
        return courseEndDate;
    }
    public void setCourseEndDate(LocalDate courseEndDate) {
        this.courseEndDate = courseEndDate;
    }

    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    

    
}
