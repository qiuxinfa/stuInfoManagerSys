package com.qxf.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Institute;
import com.qxf.service.InstituteService;

@Controller
public class InstituteController {
	@Autowired
	private InstituteService instituteService;	 
	/**
	 * 查找全部学院
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllInstitute")
	    public String findAllInstitute(Institute institute) {
		    System.out.println("查找条件--->"+institute);
	        List<Institute> list = instituteService.findAllInstitute(institute);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询学院
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findInstituteById")
    public Institute findInstituteById(@RequestParam("id") String id) {
        return instituteService.findInstituteById(id);
    }

    /**
     * 根据姓名模糊查找学院
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findInstituteByName")
    public Institute findInstituteByName(@RequestParam("name") String name) {
        return instituteService.findInstituteByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteInstituteById")
    public String deleteInstituteById(String id) {
    	Integer flag = instituteService.deleteInstituteById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateInstitute")
    public String updateinstitute(Institute institute) {
    	Integer flag = instituteService.updateInstitute(institute);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addInstitute")
    public String addInstitute(Institute institute) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	institute.setId(id);
    	Integer flag = instituteService.addInstitute(institute);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
