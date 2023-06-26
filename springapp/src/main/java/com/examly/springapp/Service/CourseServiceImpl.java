package com.examly.springapp.Service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.repository.AdminCourseRepository;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private AdminCourseRepository adminCourseRepository;

    @Override
    public CourseModel addCourse(CourseModel course) {
        return adminCourseRepository.save(course);
    }

    @Override
    public List<CourseModel> viewCourse() {
        return adminCourseRepository.findAll();
    }

    @Override
    public CourseModel editCourse(Integer courseId, CourseModel course) {
        CourseModel cm = adminCourseRepository.findById(courseId).get();

        if(Objects.nonNull(course.getCourseName()) &&
        !"".equalsIgnoreCase(course.getCourseName())) {
            cm.setCourseName(course.getCourseName());
        }

        if(Objects.nonNull(course.getCourseDescription()) &&
        !"".equalsIgnoreCase(course.getCourseDescription())) {
            cm.setCourseDescription(course.getCourseDescription());
        }

        if(Objects.nonNull(course.getCourseDuration()) &&
        !"".equals(course.getCourseDuration())) {
            cm.setCourseDuration(course.getCourseDuration());
        }

        return adminCourseRepository.save(cm);

    }

    @Override
    public void deleteCourse(Integer courseId) {
        adminCourseRepository.deleteById(courseId);
    }

    
}
