package com.qxf.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.qxf.pojo.Clazz;
import com.qxf.pojo.Institute;
import com.qxf.pojo.Major;
import com.qxf.pojo.Student;
import com.qxf.service.StudentService;

@Controller
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	/**
	 * 格式化前台传过来的日期类型
	 * @param binder
	 */
	@InitBinder
	public void initBinder(ServletRequestDataBinder binder){
	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}
	
	/**
	 * 查找学院列表
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findInstituteList")
	    public String findInstituteList(Model model) {
		   //学院下拉列表
		    List<Institute> instituteList = studentService.getInstituteList();
	        String jsonString = JSON.toJSONString(instituteList);
	        return jsonString;
	    }
	
		/**
		 * 查找专业列表
		 * @param model
		 * @return
		 */
		 @ResponseBody
		 @RequestMapping("/findMajorList")
		    public String findMajorList(Major major) {
			   //专业下拉列表
			    List<Major> majorList = studentService.getMajorList(major);
		        String jsonString = JSON.toJSONString(majorList);
		        return jsonString;
		    }
		/**
		 * 查找班级列表
		 * @param model
		 * @return
		 */
		 @ResponseBody
		 @RequestMapping("/findClazzList")
		    public String findClazzList(Clazz clazz) {
			   //班级下拉列表
			    List<Clazz> clazzList = studentService.getClazzList(clazz);
		        String jsonString = JSON.toJSONString(clazzList);
		        return jsonString;
		    }		 
	/**
	 * 查找全部学生
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllStudent")
	    public String findAllStudent(Model model, Student student) {
		    System.out.println("查找条件--->"+student);
	        List<Student> list = studentService.findAllStudent(student);
	        String jsonString = JSON.toJSONString(list);
	        return jsonString;
	    }
    /**
     * 根据id查询学生
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findStudentById")
    public Student findStudentById(@RequestParam("id") String id) {
    	System.out.println("查找学号--->"+id);
        return studentService.findStudentById(id);
    }

    /**
     * 根据姓名模糊查找学生
     * @param name
     * @return
     */
    @ResponseBody
    @RequestMapping("/findStudentByName")
    public Student findStudentByName(@RequestParam("name") String name) {
        return studentService.findStudentByName(name);
    }
    
    @ResponseBody
    @RequestMapping("/deleteStudentById")
    public String deleteStudentById(String id) {
    	Integer flag = studentService.deleteStudentById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateStudent")
    public String updateStudent(Student student) {
    	Integer flag = studentService.updateStudent(student);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addStudent")
    public String addStudent(Student student) {
    	String id = UUID.randomUUID().toString().replace("-", "");
    	student.setId(id);
    	Integer flag = studentService.addStudent(student);
    	String msg = "";
    	if(flag>0) {
    		msg = "添加成功";
    	}else {
    		msg = "添加失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
}
