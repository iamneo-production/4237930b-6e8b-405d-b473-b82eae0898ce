package com.examly.springapp.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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

	
	public course() {
		
	}
	public CourseModel(String courseName, int courseDuration, String courseDescription, String courseTiming,
			int enrolledStudents) {
		super();
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.courseDescription = courseDescription;
		this.courseTiming = courseTiming;
		this.enrolledStudents = enrolledStudents;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
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
}
	
	

