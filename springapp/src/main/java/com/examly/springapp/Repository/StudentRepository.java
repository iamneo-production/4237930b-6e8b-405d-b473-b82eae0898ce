package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examly.springapp.Model.StudentModel;

@Repository


public interface StudentRepository extends JpaRepository<StudentModel, Integer>{
	
	StudentModel findByUserId(int userId);
}

