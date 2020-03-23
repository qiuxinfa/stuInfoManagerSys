package com.qxf.mapper;

import java.util.List;

import com.qxf.pojo.Institute;

public interface InstituteMapper {
	/**
	 * 查找全部学院
	 * @return
	 */
	public List<Institute> findAllInstitute(Institute institute);
	
	/**
	 * 根据学号查找学院
	 * @param id
	 * @return
	 */
	public Institute findInstituteById(String id);
	
	/**
	 * 根据姓名模糊查找学院
	 * @param name
	 * @return
	 */
	public Institute findInstituteByName(String name);
	
	/**
	 * 根据学号删除学院
	 * @param sid
	 * @return
	 */
	public Integer deleteInstituteById(String id);
	
	/**
	 * 修改学院信息
	 * @param student
	 * @return
	 */
	public Integer updateInstitute(Institute institute);
	
	/**
	 * 新增学院
	 * @param student
	 * @return
	 */
	public Integer addInstitute(Institute institute);
	
}
