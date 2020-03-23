package com.qxf.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Major;
import com.qxf.service.MajorService;

@Controller
public class MajorController {
	@Autowired
	private MajorService majorService;	 
	/**
	 * 查找全部专业
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllMajor")
	    public String findAllMajor(Major major) {
		    System.out.println("查找条件--->"+major);
	        List<Major> list = majorService.findAllMajor(major);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询专业
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findMajorById")
    public Major findMajorById(@RequestParam("id") String id) {
    	System.out.println("查找学号--->"+id);
        return majorService.findMajorById(id);
    }

    /**
     * 根据姓名模糊查找专业
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findMajorByName")
    public Major findmajorByName(@RequestParam("name") String name) {
        return majorService.findMajorByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteMajorById")
    public String deleteMajorById(String id) {
    	Integer flag = majorService.deleteMajorById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateMajor")
    public String updatemajor(Major major) {
    	Integer flag = majorService.updateMajor(major);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addMajor")
    public String addMajor(Major major) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	major.setId(id);
    	Integer flag = majorService.addMajor(major);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
