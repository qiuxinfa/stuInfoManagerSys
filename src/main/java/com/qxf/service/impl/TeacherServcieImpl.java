package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.TeacherMapper;
import com.qxf.pojo.Teacher;
import com.qxf.service.TeacherService;

@Service
public class TeacherServcieImpl implements TeacherService{

	@Autowired(required=false)
	private TeacherMapper teacherMapper;
	
	public List<Teacher> findAllTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherMapper.findAllTeacher(teacher);
	}

	public Teacher findTeacherById(String id) {
		// TODO Auto-generated method stub
		return teacherMapper.findTeacherById(id);
	}

	public Teacher findTeacherByName(String name) {
		// TODO Auto-generated method stub
		return teacherMapper.findTeacherByName(name);
	}

	public Integer deleteTeacherById(String id) {
		// TODO Auto-generated method stub
		return teacherMapper.deleteTeacherById(id);
	}

	public Integer updateTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherMapper.updateTeacher(teacher);
	}

	public Integer addTeacher(Teacher teacher) {
		// TODO Auto-generated method stub
		return teacherMapper.addTeacher(teacher);
	}

}
