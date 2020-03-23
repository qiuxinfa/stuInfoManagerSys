package com.qxf.mapper;

import java.util.List;

import com.qxf.pojo.Course;

public interface CourseMapper {
	/**
	 * 查找全部课程
	 * @return
	 */
	public List<Course> findAllCourse(Course course);
	
	/**
	 * 根据学号查找课程
	 * @param id
	 * @return
	 */
	public Course findCourseById(String id);
	
	/**
	 * 根据姓名模糊查找课程
	 * @param name
	 * @return
	 */
	public Course findCourseByName(String name);
	
	/**
	 * 根据学号删除课程
	 * @param sid
	 * @return
	 */
	public Integer deleteCourseById(String id);
	
	/**
	 * 修改课程信息
	 * @param student
	 * @return
	 */
	public Integer updateCourse(Course course);
	
	/**
	 * 新增课程
	 * @param student
	 * @return
	 */
	public Integer addCourse(Course course);
	
}
