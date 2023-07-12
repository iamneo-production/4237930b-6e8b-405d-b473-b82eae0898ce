package com.examly.springapp.Service;

import com.examly.springapp.Model.AdmissionModel;

import java.util.List;

public interface AdmissionService {
    AdmissionModel saveDetail(AdmissionModel admissionmodel);

   // List<ec> saveDetails(List<ec> EC);

    List<AdmissionModel> getDetails();

    String deleteDetails(int id);

    AdmissionModel updateDetails(int id,AdmissionModel admissionmodel);

    String getStatusValue(int id);

    AdmissionModel getDetailsById(int id);
    
    List< AdmissionModel> getByuserId(int userId);

    AdmissionModel findByStudentId(int studentId);

}
