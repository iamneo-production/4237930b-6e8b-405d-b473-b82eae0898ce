package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.CourseModel;


@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Integer>{

}


