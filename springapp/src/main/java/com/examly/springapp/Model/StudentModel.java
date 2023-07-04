package com.examly.springapp.Model;

import java.time.LocalDate;
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
	private int studentId;
	@Column(name = "student_name")
	private String studentName;
	@Column(name = "student_dob")
	private LocalDate studentDOB;
	@Column(name = "address")
	private String address;
	@Column(name = "mobile_no")
	private String mobileNo;
	@Column(name = "sslc_marks")
	private int sslcMarks;
	@Column(name = "hsc_marks")
	private int hscMarks;
	@Column(name = "diploma_marks")
	private int diplomaMarks;
	@Column(name = "eligibility")
	private String eligibility;
	@Column(name = "gender")
	private String gender;
	@Column(name = "father_name")
	private String fatherName;
	@Column(name = "mother_name")
	private String motherName;
	@Column(name = "alt_mob_no")
	private String alternateMobileNo;
	@Column(name = "email_id")
	private String emailId;
	@Column(name = "house_no")
	private String houseNo;
	@Column(name = "street_name")
	private String streetName;
	@Column(name = "area_name")
	private String areaName;
	@Column(name = "pin_code")
	private int pinCode;
	@Column(name = "first_name")
	private String firstName;
	@Column(name = "last_name")
	private String lastName;
	@Column(name = "nationality")
	private String nationality;
	@Column(name = "state")
	private String state;
	
	public student(){

	}
	
	public student(String studentName, LocalDate studentDOB, String address, String mobileNo, int sslcMarks,
			int hscMarks, int diplomaMarks, String eligibility, String gender, String fatherName, String motherName,
			String alternateMobileNo, String emailId, String houseNo, String streetName, String areaName, int pinCode,
			String firstName, String lastName, String nationality, String state) {
		
		this.studentName = studentName;
		this.studentDOB = studentDOB;
		this.address = address;
		this.mobileNo = mobileNo;
		this.sslcMarks = sslcMarks;
		this.hscMarks = hscMarks;
		this.diplomaMarks = diplomaMarks;
		this.eligibility = eligibility;
		this.gender = gender;
		this.fatherName = fatherName;
		this.motherName = motherName;
		this.alternateMobileNo = alternateMobileNo;
		this.emailId = emailId;
		this.houseNo = houseNo;
		this.streetName = streetName;
		this.areaName = areaName;
		this.pinCode = pinCode;
		this.firstName = firstName;
		this.lastName = lastName;
		this.nationality = nationality;
		this.state = state;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public LocalDate getStudentDOB() {
		return studentDOB;
	}
	public void setStudentDOB(LocalDate studentDOB) {
		this.studentDOB = studentDOB;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public int getSslcMarks() {
		return sslcMarks;
	}
	public void setSslcMarks(int sslcMarks) {
		this.sslcMarks = sslcMarks;
	}
	public int getHscMarks() {
		return hscMarks;
	}
	public void setHscMarks(int hscMarks) {
		this.hscMarks = hscMarks;
	}
	public int getDiplomaMarks() {
		return diplomaMarks;
	}
	public void setDiplomaMarks(int diplomaMarks) {
		this.diplomaMarks = diplomaMarks;
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
	public String getAlternateMobileNo() {
		return alternateMobileNo;
	}
	public void setAlternateMobileNo(String alternateMobileNo) {
		this.alternateMobileNo = alternateMobileNo;
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
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
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


