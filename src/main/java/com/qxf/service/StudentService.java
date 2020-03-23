package com.qxf.service;

import java.util.List;

import com.qxf.pojo.Clazz;
import com.qxf.pojo.Institute;
import com.qxf.pojo.Major;
import com.qxf.pojo.Student;

public interface StudentService {
	/**
	 * 查找全部学生
	 * @return
	 */
	public List<Student> findAllStudent(Student student);
	
	/**
	 * 根据学号查找学生
	 * @param sid
	 * @return
	 */
	public Student findStudentById(String id);
	
	/**
	 * 根据姓名模糊查找学生
	 * @param name
	 * @return
	 */
	public Student findStudentByName(String name);
	
	/**
	 * 根据学号删除学生
	 * @param sid
	 * @return
	 */
	public Integer deleteStudentById(String id);
	
	/**
	 * 修改学生信息
	 * @param student
	 * @return
	 */
	public Integer updateStudent(Student student);
	
	/**
	 * 新增学生
	 * @param student
	 * @return
	 */
	public Integer addStudent(Student student);
	
	/**
	 * 查找学院列表
	 * @return
	 */
	public List<Institute> getInstituteList();
	
	
	/**
	 * 查找专业列表
	 * @return
	 */
	public List<Major> getMajorList(Major major);
	
	/**
	 * 查找班级列表
	 * @return
	 */
	public List<Clazz> getClazzList(Clazz clazz);	
}
