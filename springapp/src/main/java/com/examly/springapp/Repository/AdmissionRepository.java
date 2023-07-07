package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.examly.springapp.Model.AdmissionModel;
import org.springframework.stereotype.Repository;

 @Repository
public interface AdmissionRepository extends JpaRepository<AdmissionModel,Integer>{
    List<AdmissionModel> findByuserId(int userId);
    AdmissionModel findByStudentId(int studentId);
}
