package com.examly.springapp.Service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.CourseModel;
import com.examly.springapp.Repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseRepository adminCourseRepository;

    @Override
    public CourseModel addCourse(CourseModel course) {
        return adminCourseRepository.save(course);
    }

    @Override
    public List<CourseModel> viewCourse() {
        return adminCourseRepository.findAll();
    }

    @Override
    public List<CourseModel> findByInstituteId(int instituteId) {
        return adminCourseRepository.findByInstituteId(instituteId);
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

        if(Objects.nonNull(course.getCourseTiming()) &&
        !"".equalsIgnoreCase(course.getCourseTiming())) {
            cm.setCourseTiming(course.getCourseTiming());
        }

        if(Objects.nonNull(course.getEnrolledStudents()) &&
        !"".equals(course.getEnrolledStudents())) {
            cm.setEnrolledStudents(course.getEnrolledStudents());
        }

        if(Objects.nonNull(course.getInstituteId()) &&
        !"".equals(course.getInstituteId())) {
            cm.setInstituteId(course.getInstituteId());
        }

        return adminCourseRepository.save(cm);

    }

    @Override
    public void deleteCourse(Integer courseId) {
        adminCourseRepository.deleteById(courseId);
    }

    @Override
    public CourseModel getcourseById(int courseId) {
        return adminCourseRepository.findById(courseId).orElseThrow(() -> 



        new ResourceNotFoundException("Institute does not exist for id:"+ courseId));
        
    }

    //incrementing student count
    public int incrementStudents(Integer courseId){
        CourseModel cm = adminCourseRepository.findById(courseId).get();
        cm.setEnrolledStudents(cm.getEnrolledStudents()+1);
     
        adminCourseRepository.save(cm);
        return cm.getEnrolledStudents();
    }

    //decrementing student count
    public int decrementStudents(Integer courseId){
        CourseModel cm = adminCourseRepository.findById(courseId).get();
        if(cm.getEnrolledStudents()!=0)
        {
        cm.setEnrolledStudents(cm.getEnrolledStudents()-1);
        }
        adminCourseRepository.save(cm);
        return cm.getEnrolledStudents();
    }


    
}
