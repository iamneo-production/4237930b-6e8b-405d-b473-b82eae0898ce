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

        return adminRepository.save(stud);

    }

    @Override
    public void deleteStudent(Integer studentId) {
        adminRepository.deleteById(studentId);
    }


}
