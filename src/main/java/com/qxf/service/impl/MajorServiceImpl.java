package com.qxf.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.MajorMapper;
import com.qxf.pojo.Major;
import com.qxf.service.MajorService;

@Service
public class MajorServiceImpl implements MajorService{
    @Autowired
	private MajorMapper majorMapper;
	
	public List<Major> findAllMajor(Major major) {
		// TODO Auto-generated method stub
		return majorMapper.findAllMajor(major);
	}

	public Major findMajorById(String id) {
		// TODO Auto-generated method stub
		return majorMapper.findMajorById(id);
	}

	public Major findMajorByName(String name) {
		// TODO Auto-generated method stub
		return majorMapper.findMajorByName(name);
	}

	public Integer deleteMajorById(String id) {
		// TODO Auto-generated method stub
		return majorMapper.deleteMajorById(id);
	}

	public Integer updateMajor(Major major) {
		// TODO Auto-generated method stub
		return majorMapper.updateMajor(major);
	}

	public Integer addMajor(Major major) {
		// TODO Auto-generated method stub
		return majorMapper.addMajor(major);
	}

}
