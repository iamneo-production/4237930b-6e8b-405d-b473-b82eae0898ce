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
	private Integer courseId;
	@Column(name = "course_name")
	private String courseName;
	@Column(name = "course_duration")
	private Integer courseDuration;
	@Column(name = "course_description")
	private String courseDescription;
	@Column(name = "course_timing")
	private String courseTiming;
	@Column(name = "enrolled_students")
	private Integer enrolledStudents;
	@Column(name = "institute_id")
	private Integer instituteId;

	public CourseModel() {
		
	}

	public CourseModel(Integer courseId, String courseName, Integer courseDuration, String courseDescription,
			String courseTiming, Integer enrolledStudents, Integer instituteId) {
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.courseDescription = courseDescription;
		this.courseTiming = courseTiming;
		this.enrolledStudents = enrolledStudents;
		this.instituteId = instituteId;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Integer getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(Integer courseDuration) {
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

	public Integer getEnrolledStudents() {
		return enrolledStudents;
	}

	public void setEnrolledStudents(Integer enrolledStudents) {
		this.enrolledStudents = enrolledStudents;
	}

	public Integer getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(Integer instituteId) {
		this.instituteId = instituteId;
	}

	
	
	
}
	
	

