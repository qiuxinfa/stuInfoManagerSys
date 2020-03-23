package com.qxf.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Course;
import com.qxf.service.CourseService;

@Controller
public class CourseController {
	@Autowired
	private CourseService courseService;	 
	/**
	 * 查找全部课程
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllCourse")
	    public String findAllcourse(Course course) {
		    System.out.println("查找条件--->"+course);
	        List<Course> list = courseService.findAllCourse(course);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询课程
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findCourseById")
    public Course findCourseById(@RequestParam("id") String id) {
        return courseService.findCourseById(id);
    }

    /**
     * 根据姓名模糊查找课程
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findCourseByName")
    public Course findCourseByName(@RequestParam("name") String name) {
        return courseService.findCourseByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteCourseById")
    public String deleteCourseById(String id) {
    	Integer flag = courseService.deleteCourseById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateCourse")
    public String updateCourse(Course course) {
    	Integer flag = courseService.updateCourse(course);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addCourse")
    public String addCourse(Course course) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	course.setId(id);
    	Integer flag = courseService.addCourse(course);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
