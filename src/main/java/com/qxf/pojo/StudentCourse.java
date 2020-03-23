package com.qxf.pojo;

/**
 * 学生-课程关联表
 * @author Administrator
 *
 */
public class StudentCourse {
	private String id;
	private String studentId;
	private String courseId;
	
	public StudentCourse() {
		
	}



	public StudentCourse(String id, String studentId, String courseId) {
		super();
		this.id = id;
		this.studentId = studentId;
		this.courseId = courseId;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}



	@Override
	public String toString() {
		return "StudentCourse [id=" + id + ", studentId=" + studentId + ", courseId=" + courseId + "]";
	}


	
	
}
