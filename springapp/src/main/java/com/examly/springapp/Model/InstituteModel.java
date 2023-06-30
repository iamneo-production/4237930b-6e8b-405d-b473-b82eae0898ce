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
	
	@Override
	public String toString() {
		return "InstituteModel [instituteAddress=" + instituteAddress + ", instituteDescription=" + instituteDescription
				+ ", instituteEmail=" + instituteEmail + ", instituteId=" + instituteId + ", instituteImgUrl="
				+ instituteImgUrl + ", instituteMobileno=" + instituteMobileno + ", instituteName=" + instituteName
				+ ", instituteRating=" + instituteRating + "]";
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

