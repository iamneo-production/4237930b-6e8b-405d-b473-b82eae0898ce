package com.examly.springapp.Model;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "courses")

public class CourseModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseId;
	@Column(name = "course_name")
	private String courseName;
	@Column(name = "course_duration")
	private int courseDuration;
	@Column(name = "course_description")
	private String courseDescription;
	@Column(name = "course_timing")
	private String courseTiming;
	@Column(name = "enrolled_students")
	private int enrolledStudents;
	@Column(name = "institute_id")
	private int instituteId;

	public CourseModel() {
		
	}

	@Override
	public String toString() {
		return "CourseModel [courseDescription=" + courseDescription + ", courseDuration=" + courseDuration
				+ ", courseId=" + courseId + ", courseName=" + courseName + ", courseTiming=" + courseTiming
				+ ", enrolledStudents=" + enrolledStudents + ", instituteId=" + instituteId + "]";
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public String getCourseTiming() {
		return courseTiming;
	}

	public void setCourseTiming(String courseTiming) {
		this.courseTiming = courseTiming;
	}

	public int getEnrolledStudents() {
		return enrolledStudents;
	}

	public void setEnrolledStudents(int enrolledStudents) {
		this.enrolledStudents = enrolledStudents;
	}

	public int getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}
	
	
}
	
	

