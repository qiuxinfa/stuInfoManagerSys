package com.qxf.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Clazz;
import com.qxf.service.ClazzService;

@Controller
public class ClazzController {
	@Autowired
	private ClazzService clazzService;	 
	/**
	 * 查找全部班级
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllClazz")
	    public String findAllClazz(Clazz clazz) {
		    System.out.println("查找条件--->"+clazz);
	        List<Clazz> list = clazzService.findAllClazz(clazz);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询班级
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findClazzById")
    public Clazz findClazzById(@RequestParam("id") String id) {
    	System.out.println("查找学号--->"+id);
        return clazzService.findClazzById(id);
    }

    /**
     * 根据姓名模糊查找班级
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findClazzByName")
    public Clazz findclazzByName(@RequestParam("name") String name) {
        return clazzService.findClazzByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteClazzById")
    public String deleteClazzById(String id) {
    	Integer flag = clazzService.deleteClazzById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateClazz")
    public String updateClazz(Clazz clazz) {
    	Integer flag = clazzService.updateClazz(clazz);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addClazz")
    public String addClazz(Clazz clazz) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	clazz.setId(id);
    	Integer flag = clazzService.addClazz(clazz);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
