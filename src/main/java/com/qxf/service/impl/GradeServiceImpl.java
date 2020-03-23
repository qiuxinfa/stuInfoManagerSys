package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.GradeMapper;
import com.qxf.pojo.CourseTeacher;
import com.qxf.pojo.Grade;
import com.qxf.pojo.Student;
import com.qxf.pojo.StudentCourse;
import com.qxf.service.GradeService;

@Service
public class GradeServiceImpl implements GradeService{

	@Autowired
	private GradeMapper gradeMapper;
	
	public List<Grade> findAllGrade(Grade grade) {
		// TODO Auto-generated method stub
		return gradeMapper.findAllGrade(grade);
	}

	public Grade findGradeById(String id) {
		// TODO Auto-generated method stub
		return gradeMapper.findGradeById(id);
	}

	public Integer deleteGradeById(String id) {
		// TODO Auto-generated method stub
		return gradeMapper.deleteGradeById(id);
	}

	public Integer updateGrade(Grade grade) {
		// TODO Auto-generated method stub
		return gradeMapper.updateGrade(grade);
	}

	public Integer addGrade(Grade grade) {
		// TODO Auto-generated method stub
		return gradeMapper.addGrade(grade);
	}

	public List<Student> getStudentList() {
		// TODO Auto-generated method stub
		return gradeMapper.getStudentList();
	}

	public List<StudentCourse> getStudentCourseList(StudentCourse sc) {
		// TODO Auto-generated method stub
		return gradeMapper.getStudentCourseList(sc);
	}

	public List<CourseTeacher> getCourseTeacherList(CourseTeacher ct) {
		// TODO Auto-generated method stub
		return gradeMapper.getCourseTeacherList(ct);
	}

	public StudentCourse findStudentCourseById(StudentCourse sc) {
		// TODO Auto-generated method stub
		return gradeMapper.findStudentCourseById(sc);
	}

	public Integer addStudentCourse(StudentCourse sc) {
		// TODO Auto-generated method stub
		return gradeMapper.addStudentCourse(sc);
	}

	public CourseTeacher findCourseTeacherById(CourseTeacher ct) {
		// TODO Auto-generated method stub
		return gradeMapper.findCourseTeacherById(ct);
	}

	public Integer addCourseTeacher(CourseTeacher ct) {
		// TODO Auto-generated method stub
		return gradeMapper.addCourseTeacher(ct);
	}

}
