package com.examly.springapp.Model;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "institutes")
public class InstituteModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int instituteId;
	@Column(name = "institute_name")
	private String instituteName;
	@Column(name = "institute_mobile_no")
	private String instituteMobileno;
	@Column(name = "institute_imgUrl")
	private String instituteImgUrl;
	@Column(name = "institute_email")
	private String instituteEmail;
	@Column(name = "institute_address")
	private String instituteAddress;
	@Column(name = "institute_description")
	private String instituteDescription;
	@Column(name = "institute_rating")
	private int instituteRating;
	
	
	public InstituteModel(String instituteName, String instituteMobileno, String instituteImgUrl, String instituteEmail,
			String instituteAddress, String instituteDescription, int instituteRating) {
		super();
		this.instituteName = instituteName;
		this.instituteMobileno = instituteMobileno;
		this.instituteImgUrl = instituteImgUrl;
		this.instituteEmail = instituteEmail;
		this.instituteAddress = instituteAddress;
		this.instituteDescription = instituteDescription;
		this.instituteRating = instituteRating;
	}
	public int getInstituteId() {
		return instituteId;
	}
	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}
	public String getInstituteName() {
		return instituteName;
	}
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	public String getInstituteMobileno() {
		return instituteMobileno;
	}
	public void setInstituteMobileno(String instituteMobileno) {
		this.instituteMobileno = instituteMobileno;
	}
	public String getInstituteImgUrl() {
		return instituteImgUrl;
	}
	public void setInstituteImgUrl(String instituteImgUrl) {
		this.instituteImgUrl = instituteImgUrl;
	}
	public String getInstituteEmail() {
		return instituteEmail;
	}
	public void setInstituteEmail(String instituteEmail) {
		this.instituteEmail = instituteEmail;
	}
	public String getInstituteAddress() {
		return instituteAddress;
	}
	public void setInstituteAddress(String instituteAddress) {
		this.instituteAddress = instituteAddress;
	}
	public String getInstituteDescription() {
		return instituteDescription;
	}
	public void setInstituteDescription(String instituteDescription) {
		this.instituteDescription = instituteDescription;
	}
	public int getInstituteRating() {
		return instituteRating;
	}
	public void setInstituteRating(int instituteRating) {
		this.instituteRating = instituteRating;
	}
	
	
	
	
}

