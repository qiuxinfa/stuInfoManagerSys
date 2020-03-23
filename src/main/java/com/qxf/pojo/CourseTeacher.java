package com.qxf.pojo;

/**
 * 课程-老师表
 * @author Administrator
 *
 */
public class CourseTeacher {
	private String id;
	private String courseId;
	private String teacherId;
	
	public CourseTeacher() {
		
	}



	public CourseTeacher(String id, String courseId, String teacherId) {
		super();
		this.id = id;
		this.courseId = courseId;
		this.teacherId = teacherId;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}



	@Override
	public String toString() {
		return "CourseTeacher [id=" + id + ", courseId=" + courseId + ", teacherId=" + teacherId + "]";
	}


	
}
