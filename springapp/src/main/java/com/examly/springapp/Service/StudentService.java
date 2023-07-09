package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.StudentModel;

public interface StudentService {


    public StudentModel addStudent(StudentModel student);

    public List<StudentModel> viewStudent();

    public StudentModel editStudent(Integer studentId, StudentModel student);

    public void deleteStudent(Integer studentId);
    
    public StudentModel getStudentById(Integer studentId);

    StudentModel findByStudentUserId(Integer userId);
}
