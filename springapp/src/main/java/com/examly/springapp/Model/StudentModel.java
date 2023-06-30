package com.examly.springapp.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")

public class StudentModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;
	@Column(name = "student_name")
	private String studentName;
	@Column(name = "student_dob")
	private Date studentDOB;
	@Column(name = "address")
	private String address;
	@Column(name = "mobile_no")
	private String mobile;
	@Column(name = "sslc_marks")
	private Integer sslc;
	@Column(name = "hsc_marks")
	private Integer hsc;
	@Column(name = "diploma_marks")
	private Integer diploma;
	@Column(name = "eligibility")
	private String eligibility;
	@Column(name = "gender")
	private String gender;
	@Column(name = "father_name")
	private String fatherName;
	@Column(name = "mother_name")
	private String motherName;
	@Column(name = "alt_mob_no")
	private String altMobile;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "house_no")
	private String houseNo;
	@Column(name = "street_name")
	private String streetName;
	@Column(name = "area_name")
	private String areaName;
	@Column(name = "pin_code")
	private Integer pincode;
	@Column(name = "nationality")
	private String nationality;
	@Column(name = "state")
	private String state;
	
	public student() {
		
	}

	public StudentModel(String studentName, Date studentDOB, String address, String mobile, Integer sslc, Integer hsc,
			Integer diploma, String eligibility, String gender, String fatherName, String motherName, String altMobile,
			String emailId, String houseNo, String streetName, String areaName, Integer pincode, String nationality,
			String state) {
		this.studentName = studentName;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobile = mobile;
		this.sslc = sslc;
		this.hsc = hsc;
		this.diploma = diploma;
		this.eligibility = eligibility;
		this.gender = gender;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.altMobile = altMobile;
		this.emailId = emailId;
		this.houseNo = houseNo;
		this.streetName = streetName;
		this.areaName = areaName;
		this.pincode = pincode;
		this.nationality = nationality;
		this.state = state;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Date getStudentDOB() {
		return studentDOB;
	}

	public void setStudentDOB(Date studentDOB) {
		this.studentDOB = studentDOB;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Integer getSslc() {
		return sslc;
	}

	public void setSslc(Integer sslc) {
		this.sslc = sslc;
	}

	public Integer getHsc() {
		return hsc;
	}

	public void setHsc(Integer hsc) {
		this.hsc = hsc;
	}

	public Integer getDiploma() {
		return diploma;
	}

	public void setDiploma(Integer diploma) {
		this.diploma = diploma;
	}

	public String getEligibility() {
		return eligibility;
	}

	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public String getAltMobile() {
		return altMobile;
	}

	public void setAltMobile(String altMobile) {
		this.altMobile = altMobile;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getHouseNo() {
		return houseNo;
	}

	public void setHouseNo(String houseNo) {
		this.houseNo = houseNo;
	}

	public String getStreetName() {
		return streetName;
	}

	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public Integer getPincode() {
		return pincode;
	}

	public void setPincode(Integer pincode) {
		this.pincode = pincode;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
}

