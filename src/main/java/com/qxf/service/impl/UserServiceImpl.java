package com.qxf.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qxf.mapper.UserMapper;
import com.qxf.pojo.User;
import com.qxf.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	public Integer addUser(User user) {
		// TODO Auto-generated method stub
		return userMapper.addUser(user);
	}

	public User findUser(User user) {
		// TODO Auto-generated method stub
		return userMapper.findUser(user);
	}

}
