package com.examly.springapp.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "students")

public class StudentModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	@Column(name = "student_name")
	private String studentName;
	@Column(name = "student_dob")
	private Date studentDOB;
	@Column(name = "address")
	private String address;
	@Column(name = "mobile_no")
	private String mobile;
	@Column(name = "sslc_marks")
	private int sslc;
	@Column(name = "hsc_marks")
	private int hsc;
	@Column(name = "diploma_marks")
	private int diploma;
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
	private int pincode;
	@Column(name = "nationality")
	private String nationality;
	@Column(name = "state")
	private String state;
	
	public StudentModel() {
		
	}

	@Override
	public String toString() {
		return "StudentModel [address=" + address + ", altMobile=" + altMobile + ", areaName=" + areaName + ", diploma="
				+ diploma + ", eligibility=" + eligibility + ", emailId=" + emailId + ", fatherName=" + fatherName
				+ ", gender=" + gender + ", houseNo=" + houseNo + ", hsc=" + hsc + ", mobile=" + mobile
				+ ", motherName=" + motherName + ", nationality=" + nationality + ", pincode=" + pincode + ", sslc="
				+ sslc + ", state=" + state + ", streetName=" + streetName + ", studentDOB=" + studentDOB
				+ ", studentId=" + studentId + ", studentName=" + studentName + "]";
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

	public int getSslc() {
		return sslc;
	}

	public void setSslc(int sslc) {
		this.sslc = sslc;
	}

	public int getHsc() {
		return hsc;
	}

	public void setHsc(int hsc) {
		this.hsc = hsc;
	}

	public int getDiploma() {
		return diploma;
	}

	public void setDiploma(int diploma) {
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

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
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


