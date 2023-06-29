package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.course;


@Repository
public interface CourseRepository extends JpaRepository<course, Long>{

}


