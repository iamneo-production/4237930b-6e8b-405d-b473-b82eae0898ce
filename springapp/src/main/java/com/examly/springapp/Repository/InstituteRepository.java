package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.institute;

@Repository

public interface InstituteRepository extends JpaRepository<institute, Long>{

}

