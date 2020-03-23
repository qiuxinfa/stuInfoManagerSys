package com.qxf.service;

import java.util.List;

import com.qxf.pojo.Major;

public interface MajorService {
	/**
	 * 查找全部专业
	 * @return
	 */
	public List<Major> findAllMajor(Major major);
	
	/**
	 * 根据id查找专业
	 * @param sid
	 * @return
	 */
	public Major findMajorById(String id);
	
	/**
	 * 根据姓名模糊查找专业
	 * @param name
	 * @return
	 */
	public Major findMajorByName(String name);
	
	/**
	 * 根据id删除专业
	 * @param sid
	 * @return
	 */
	public Integer deleteMajorById(String id);
	
	/**
	 * 修改专业信息
	 * @param student
	 * @return
	 */
	public Integer updateMajor(Major major);
	
	/**
	 * 新增专业
	 * @param student
	 * @return
	 */
	public Integer addMajor(Major major);
	
}
