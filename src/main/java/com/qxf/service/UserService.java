package com.qxf.service;

import com.qxf.pojo.User;

public interface UserService {
	/**
	 * 用户注册
	 * @param user
	 * @return
	 */
	public Integer addUser (User user);
	
	/**
	 * 用户登录
	 * @param user
	 * @return
	 */
	public User findUser (User user);
}
