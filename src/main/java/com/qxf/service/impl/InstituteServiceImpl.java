package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.InstituteMapper;
import com.qxf.pojo.Institute;
import com.qxf.service.InstituteService;

@Service
public class InstituteServiceImpl implements InstituteService{
    @Autowired
	private InstituteMapper instituteMapper;
	
	public List<Institute> findAllInstitute(Institute institute) {
		// TODO Auto-generated method stub
		return instituteMapper.findAllInstitute(institute);
	}

	public Institute findInstituteById(String id) {
		// TODO Auto-generated method stub
		return instituteMapper.findInstituteById(id);
	}

	public Institute findInstituteByName(String name) {
		// TODO Auto-generated method stub
		return instituteMapper.findInstituteByName(name);
	}

	public Integer deleteInstituteById(String id) {
		// TODO Auto-generated method stub
		return instituteMapper.deleteInstituteById(id);
	}

	public Integer updateInstitute(Institute institute) {
		// TODO Auto-generated method stub
		return instituteMapper.updateInstitute(institute);
	}

	public Integer addInstitute(Institute institute) {
		// TODO Auto-generated method stub
		return instituteMapper.addInstitute(institute);
	}

}
