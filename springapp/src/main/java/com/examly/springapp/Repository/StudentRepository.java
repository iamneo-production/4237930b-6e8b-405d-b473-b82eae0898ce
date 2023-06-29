package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.student;

@Repository


public interface StudentRepository extends JpaRepository<student, Long>{
	

	
}

