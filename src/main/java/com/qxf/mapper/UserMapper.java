package com.qxf.mapper;

import com.qxf.pojo.User;

public interface UserMapper {
	
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
