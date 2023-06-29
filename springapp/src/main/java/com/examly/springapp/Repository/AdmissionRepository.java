package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.Model.AdmissionModel;

public interface AdmissionRepository extends JpaRepository<AdmissionModel,Integer>{
    
}
