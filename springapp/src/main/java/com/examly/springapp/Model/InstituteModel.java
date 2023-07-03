package com.examly.springapp.Model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "institutes")
public class InstituteModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer instituteId;
	@Column(name = "institute_name")
	private String instituteName;
	@Column(name = "institute_mobile_no")
	private String instituteMobileNo;
	@Column(name = "institute_imgUrl")
	private String instituteImgUrl;
	@Column(name = "institute_email")
	private String instituteEmail;
	@Column(name = "institute_address")
	private String instituteAddress;
	@Column(name = "institute_description")
	private String instituteDescription;
	@Column(name = "institute_rating")
	private Integer instituteRating;

	public InstituteModel() {

	}

	public InstituteModel(Integer instituteId, String instituteName, String instituteMobileNo, String instituteImgUrl,
			String instituteEmail, String instituteAddress, String instituteDescription, Integer instituteRating) {
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.instituteMobileNo = instituteMobileNo;
		this.instituteImgUrl = instituteImgUrl;
		this.instituteEmail = instituteEmail;
		this.instituteAddress = instituteAddress;
		this.instituteDescription = instituteDescription;
		this.instituteRating = instituteRating;
	}
	
	public Integer getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(Integer instituteId) {
		this.instituteId = instituteId;
	}

	public String getInstituteName() {
		return instituteName;
	}

	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}

	public String getInstituteMobileNo() {
		return instituteMobileNo;
	}

	public void setInstituteMobileNo(String instituteMobileNo) {
		this.instituteMobileNo = instituteMobileNo;
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

	public Integer getInstituteRating() {
		return instituteRating;
	}

	public void setInstituteRating(Integer instituteRating) {
		this.instituteRating = instituteRating;
	}

	
	
}

