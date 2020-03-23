package com.qxf.service;

import java.util.List;

import com.qxf.pojo.Clazz;

public interface ClazzService {
	/**
	 * 查找全部班级
	 * @return
	 */
	public List<Clazz> findAllClazz(Clazz clazz);
	
	/**
	 * 根据id查找班级
	 * @param sid
	 * @return
	 */
	public Clazz findClazzById(String id);
	
	/**
	 * 根据姓名模糊查找班级
	 * @param name
	 * @return
	 */
	public Clazz findClazzByName(String name);
	
	/**
	 * 根据id删除班级
	 * @param sid
	 * @return
	 */
	public Integer deleteClazzById(String id);
	
	/**
	 * 修改班级信息
	 * @param student
	 * @return
	 */
	public Integer updateClazz(Clazz clazz);
	
	/**
	 * 新增班级
	 * @param student
	 * @return
	 */
	public Integer addClazz(Clazz clazz);
	
}
