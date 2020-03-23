package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.ClazzMapper;
import com.qxf.pojo.Clazz;
import com.qxf.service.ClazzService;

@Service
public class ClazzServiceImpl implements ClazzService{

	@Autowired
	private ClazzMapper clazzMapper;
	
	public List<Clazz> findAllClazz(Clazz clazz) {
		// TODO Auto-generated method stub
		return clazzMapper.findAllClazz(clazz);
	}

	public Clazz findClazzById(String id) {
		// TODO Auto-generated method stub
		return clazzMapper.findClazzById(id);
	}

	public Clazz findClazzByName(String name) {
		// TODO Auto-generated method stub
		return clazzMapper.findClazzByName(name);
	}

	public Integer deleteClazzById(String id) {
		// TODO Auto-generated method stub
		return clazzMapper.deleteClazzById(id);
	}

	public Integer updateClazz(Clazz clazz) {
		// TODO Auto-generated method stub
		return clazzMapper.updateClazz(clazz);
	}

	public Integer addClazz(Clazz clazz) {
		// TODO Auto-generated method stub
		return clazzMapper.addClazz(clazz);
	}

}
