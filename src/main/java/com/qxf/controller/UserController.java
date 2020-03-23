package com.qxf.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qxf.pojo.User;
import com.qxf.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	@ResponseBody
	@RequestMapping("/userLogin")
	public String userLogin(User user) {
		User u = userService.findUser(user);
		if(u==null) {
			return "0";
		}else {
			return "1";
		}
	}
	
	@ResponseBody
	@RequestMapping("/register")
	public String addUser(User user) {
		String id = UUID.randomUUID().toString().replace("-", "");
		user.setId(id);
		int flag = userService.addUser(user);
		if(flag>0) {
			return "1";
		}else {
			return "0";
		}
	}
}
