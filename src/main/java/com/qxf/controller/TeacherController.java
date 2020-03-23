package com.qxf.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Teacher;
import com.qxf.service.TeacherService;

@Controller
public class TeacherController {
	@Autowired
	private TeacherService teacherService;	 
	/**
	 * 查找全部老师
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllTeacher")
	    public String findAllTeacher(Teacher teacher) {
		    System.out.println("查找条件--->"+teacher);
	        List<Teacher> list = teacherService.findAllTeacher(teacher);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询老师
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findTeacherById")
    public Teacher findTeacherById(@RequestParam("id") String id) {
    	System.out.println("查找学号--->"+id);
        return teacherService.findTeacherById(id);
    }

    /**
     * 根据姓名模糊查找老师
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findTeacherByName")
    public Teacher findTeacherByName(@RequestParam("name") String name) {
        return teacherService.findTeacherByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteTeacherById")
    public String deleteTeacherById(String id) {
    	Integer flag = teacherService.deleteTeacherById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateTeacher")
    public String updateTeacher(Teacher teacher) {
    	Integer flag = teacherService.updateTeacher(teacher);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addTeacher")
    public String addTeacher(Teacher teacher) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	teacher.setId(id);
    	Integer flag = teacherService.addTeacher(teacher);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
