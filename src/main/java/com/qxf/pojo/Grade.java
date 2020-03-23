package com.qxf.pojo;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 成绩表
 * @author Administrator
 *
 */
public class Grade {
	private String id;
	private String studentId;
	private String courseId;
	private String teacherId;
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	private Date examTime;
	private Integer examType;
	private double score;
	
	public Grade() {
		
	}
	
	public Grade(String id, String studentId, String courseId, String teacherId, Date examTime, Integer examType,
			double score) {
		this.id = id;
		this.studentId = studentId;
		this.courseId = courseId;
		this.teacherId = teacherId;
		this.examTime = examTime;
		this.examType = examType;
		this.score = score;
	}



	public String getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
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

	public Date getExamTime() {
		return examTime;
	}

	public void setExamTime(Date examTime) {
		this.examTime = examTime;
	}

	public Integer getExamType() {
		return examType;
	}

	public void setExamType(Integer examType) {
		this.examType = examType;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "Grade [id=" + id + ", studentId=" + studentId + ", courseId=" + courseId + ", teacherId=" + teacherId
				+ ", examTime=" + examTime + ", examType=" + examType + ", score=" + score + "]";
	}


	
}
