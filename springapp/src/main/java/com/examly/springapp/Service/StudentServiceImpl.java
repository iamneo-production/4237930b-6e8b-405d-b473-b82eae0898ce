package com.examly.springapp.Service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.StudentModel;
import com.examly.springapp.repository.AdminStudentRepository;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private AdminStudentRepository adminRepository;

    @Override
    public StudentModel addStudent(StudentModel student) {
        return adminRepository.save(student);
    }

    @Override
    public List<StudentModel> viewStudent() {
        return adminRepository.findAll();
    }

    @Override
    public StudentModel editStudent(Integer studentId, StudentModel student) {
        StudentModel stud = adminRepository.findById(studentId).get();

        if(Objects.nonNull(student.getStudentName()) &&
        !"".equalsIgnoreCase(student.getStudentName())) {
            stud.setStudentName(student.getStudentName());
        }

        if(Objects.nonNull(student.getStudentDOB()) &&
        !"".equals(student.getStudentDOB())) {
            stud.setStudentDOB(student.getStudentDOB());
        }

        if(Objects.nonNull(student.getAddress()) &&
        !"".equalsIgnoreCase(student.getAddress())) {
            stud.setAddress(student.getAddress());
        }

        if(Objects.nonNull(student.getMobile()) &&
        !"".equalsIgnoreCase(student.getMobile())) {
            stud.setMobile(student.getMobile());
        }

        if(Objects.nonNull(student.getSslc()) &&
        !"".equals(student.getSslc())) {
            stud.setSslc(student.getSslc());
        }

        if(Objects.nonNull(student.getHsc()) &&
        !"".equals(student.getHsc())) {
            stud.setHsc(student.getHsc());
        }

        if(Objects.nonNull(student.getDiploma()) &&
        !"".equals(student.getDiploma())) {
            stud.setDiploma(student.getDiploma());
        }

        if(Objects.nonNull(student.getEligibility()) &&
        !"".equalsIgnoreCase(student.getEligibility())) {
            stud.setEligibility(student.getEligibility());
        }

        if(Objects.nonNull(student.getEmailId()) &&
        !"".equalsIgnoreCase(student.getEmailId())) {
            stud.setEmailId(student.getEmailId());
        }

        if(Objects.nonNull(student.getAltMobile()) &&
        !"".equalsIgnoreCase(student.getAltMobile())) {
            stud.setAltMobile(student.getAltMobile());
        }

        if(Objects.nonNull((student.getFatherName()) &&
        !"".equalsIgnoreCase(student.getFatherName()))) {
            stud.setFatherName(student.getFatherName());
        }

        if(Objects.nonNull(student.getMotherName()) &&
        !"".equalsIgnoreCase(student.getMotherName())) {
            stud.setMotherName(student.getMotherName());
        }

        if(Objects.nonNull(student.getHouseNo()) &&
        !"".equalsIgnoreCase(student.getHouseNo())) {
            stud.setHouseNo(student.getHouseNo());
        }

        if(Objects.nonNull(student.getStreetName()) &&
        !"".equalsIgnoreCase(student.getStreetName())) {
            stud.setStreetName(student.getStreetName());
        }

        if(Objects.nonNull(student.getAreaName()) &&
        !"".equalsIgnoreCase(student.getAreaName())) {
            stud.setAreaName(student.getAreaName());
        }

        if(Objects.nonNull(student.getPincode()) &&
        !"".equals(student.getPincode())) {
            stud.setPincode(student.getPincode());
        }

        if(Objects.nonNull(student.getNationality()) &&
        !"".equalsIgnoreCase(student.getNationality())) {
            stud.setNationality(student.getNationality());
        }

        if(Objects.nonNull(student.getState()) &&
        !"".equalsIgnoreCase(student.getState())) {
            stud.setState(student.getState());
        }

        if(Objects.nonNull(student.getGender()) &&
        !"".equalsIgnoreCase(student.getGender())) {
            stud.setGender(student.getGender());
        }

        return adminRepository.save(stud);

    }

    @Override
    public void deleteStudent(Integer studentId) {
        adminRepository.deleteById(studentId);
    }


}
