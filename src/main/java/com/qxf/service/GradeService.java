package com.qxf.service;

import java.util.List;

import com.qxf.pojo.CourseTeacher;
import com.qxf.pojo.Grade;
import com.qxf.pojo.Student;
import com.qxf.pojo.StudentCourse;

public interface GradeService {
	/**
	 * 查找全部成绩
	 * @return
	 */
	public List<Grade> findAllGrade(Grade grade);
	
	/**
	 * 根据学号查找成绩
	 * @param sid
	 * @return
	 */
	public Grade findGradeById(String id);
	
	/**
	 * 根据学号删除成绩
	 * @param sid
	 * @return
	 */
	public Integer deleteGradeById(String id);
	
	/**
	 * 修改成绩信息
	 * @param grade
	 * @return
	 */
	public Integer updateGrade(Grade grade);
	
	/**
	 * 新增成绩
	 * @param grade
	 * @return
	 */
	public Integer addGrade(Grade grade);
	
	/**
	 * 查找学生列表
	 * @return
	 */
	public List<Student> getStudentList();
	
	/**
	 * 查找学生-课程列表
	 * @return
	 */
	public List<StudentCourse> getStudentCourseList(StudentCourse sc);
	
	/**
	 * 查找课程-老师列表
	 * @return
	 */
	public List<CourseTeacher> getCourseTeacherList(CourseTeacher ct);
	
	/**
	 * 查找当前数据是否存在中间表StudentCourse
	 * @param sc
	 * @return
	 */
	public StudentCourse findStudentCourseById(StudentCourse sc);
	
	/**
	 * 将当前数据插入到中间表StudentCourse
	 * @param sc
	 * @return
	 */
	public Integer addStudentCourse(StudentCourse sc);
	
	/**
	 * 查找当前数据是否存在中间表CourseTeacher
	 * @param ct
	 * @return
	 */
	public CourseTeacher findCourseTeacherById(CourseTeacher ct);
	
	/**
	 * 将当前数据插入到中间表CourseTeacher
	 * @param ct
	 * @return
	 */
	public Integer addCourseTeacher(CourseTeacher ct);	
	
}
