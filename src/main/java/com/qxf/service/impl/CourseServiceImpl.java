package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.CourseMapper;
import com.qxf.pojo.Course;
import com.qxf.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
	private CourseMapper courseMapper;
	
	public List<Course> findAllCourse(Course course) {
		// TODO Auto-generated method stub
		return courseMapper.findAllCourse(course);
	}

	public Course findCourseById(String id) {
		// TODO Auto-generated method stub
		return courseMapper.findCourseById(id);
	}

	public Course findCourseByName(String name) {
		// TODO Auto-generated method stub
		return courseMapper.findCourseByName(name);
	}

	public Integer deleteCourseById(String id) {
		// TODO Auto-generated method stub
		return courseMapper.deleteCourseById(id);
	}

	public Integer updateCourse(Course course) {
		// TODO Auto-generated method stub
		return courseMapper.updateCourse(course);
	}

	public Integer addCourse(Course course) {
		// TODO Auto-generated method stub
		return courseMapper.addCourse(course);
	}

}
