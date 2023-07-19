package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.CourseModel;

public interface CourseService {
    
    public CourseModel addCourse(CourseModel course);

    public List<CourseModel> viewCourse();

    public CourseModel editCourse(Integer courseId, CourseModel course);

    public void deleteCourse(Integer courseId);


    public List<CourseModel> findByInstituteId(int instituteId);

    CourseModel getcourseById(int courseId);

    int incrementStudents(Integer courseId);
   
    int decrementStudents(Integer courseId);


}