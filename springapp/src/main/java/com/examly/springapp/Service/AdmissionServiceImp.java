package com.examly.springapp.Service;

import java.util.List;

//import javax.print.attribute.standard.MediaSize.Other;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Exception.ResourceNotFoundException;
import com.examly.springapp.Model.AdmissionModel;
import com.examly.springapp.Repository.AdmissionRepository;

@Service
public class AdmissionServiceImp implements AdmissionService {
    @Autowired
    public AdmissionRepository admissionRepo;

     @Override
    public AdmissionModel saveDetail(AdmissionModel admisssionmodel)
    {
       return admissionRepo.save(admisssionmodel);

    }
    //adding multile peron details (POST)
   /*  @Override
    public List<ec> saveDetails(List<ec> EC)
    {
        return ecrepository.saveAll(EC);
    }*/

    //finding all admission details (GET)
    @Override
    public List<AdmissionModel> getDetails()
    {
        return admissionRepo.findAll();
    }

    //delete admission
    @Override
    public String deleteDetails(int id)
    {
        admissionRepo.deleteById(id);
        return "Details Deleted Succesfully" + id;
    }

    //update admission(PUT Mapping)
    @Override
    public AdmissionModel updateDetails(int id,AdmissionModel admissionmodel)
    
        {
            AdmissionModel updateStudent=admissionRepo.findById(id).orElse(null);
            if(updateStudent!=null)
            {
                updateStudent.setInstituteId(admissionmodel.getInstituteId());
                updateStudent.setCourseId(admissionmodel.getCourseId());
                updateStudent.setStudentId(admissionmodel.getStudentId());
                updateStudent.setStatus(admissionmodel.getStatus());
                updateStudent.setCourseStartDate(admissionmodel.getCourseStartDate());
                updateStudent.setCourseEndDate(admissionmodel.getCourseEndDate());
                updateStudent.setUserId(admissionmodel.getUserId());
                admissionRepo.save(updateStudent);
                return updateStudent;
            }
         return null;
        }

    //return status 
    @Override
    public String getStatusValue(int id)
    {
       AdmissionModel vs=admissionRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Admission Id "+ id+"not existed"));
      return vs.getStatus();
    }

    @Override
    public AdmissionModel getDetailsById(int id)
    {
         AdmissionModel vs=admissionRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Admission Id "+ id+"not existed"));
         return vs;
    }

   @Override
   public List<AdmissionModel> getByuserId(int userId)
   {
     return admissionRepo.findByuserId(userId);  
   }

   @Override
    public AdmissionModel findByStudentId(int studentid) {
        
        return admissionRepo.findByStudentId(studentid);
    }

}