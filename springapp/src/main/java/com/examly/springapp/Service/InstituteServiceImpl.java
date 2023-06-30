package com.examly.springapp.Service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Repository.InstituteRepository;

@Service
public class InstituteServiceImpl implements InstituteService{

    @Autowired
    private InstituteRepository adminInstituteRepository;

    @Override
    public InstituteModel addInstitute(InstituteModel institute) {
        return adminInstituteRepository.save(institute);
    }

    @Override
    public List<InstituteModel> viewInstitute() {
        return adminInstituteRepository.findAll();
    }

    @Override
    public InstituteModel editInstitute(Integer instituteId, InstituteModel institute) {
       InstituteModel inm = adminInstituteRepository.findById(instituteId).get();

        if(Objects.nonNull(institute.getInstituteName()) &&
        !"".equalsIgnoreCase(institute.getInstituteName())) {
            inm.setInstituteName(institute.getInstituteName());
        }

        if(Objects.nonNull(institute.getInstituteDescription()) &&
        !"".equalsIgnoreCase(institute.getInstituteDescription())) {
            inm.setInstituteDescription(institute.getInstituteDescription());
        }

        if(Objects.nonNull(institute.getInstituteAddress()) &&
        !"".equalsIgnoreCase(institute.getInstituteAddress())) {
            inm.setInstituteAddress(institute.getInstituteAddress());
        }

        if(Objects.nonNull(institute.getInstituteMobileno()) &&
        !"".equalsIgnoreCase(institute.getInstituteMobileno())) {
            inm.setInstituteMobileno(institute.getInstituteMobileno());
        }

        if(Objects.nonNull(institute.getInstituteEmail()) &&
        !"".equalsIgnoreCase(institute.getInstituteEmail())) {
            inm.setInstituteEmail(institute.getInstituteEmail());
        }

        if(Objects.nonNull(institute.getInstituteImgUrl())&&
        !"".equalsIgnoreCase(institute.getInstituteImgUrl())) {
            inm.setInstituteImgUrl(institute.getInstituteImgUrl());
        }

        if(Objects.nonNull(institute.getInstituteRating()) &&
        !"".equals(institute.getInstituteRating())) {
            inm.setInstituteRating(institute.getInstituteRating());
        }

        return adminInstituteRepository.save(inm);


    }

    @Override
    public void deleteInstitute(Integer instituteId) {
        adminInstituteRepository.deleteById(instituteId);
    }
    
}
