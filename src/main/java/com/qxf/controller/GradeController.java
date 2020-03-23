package com.qxf.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.qxf.pojo.CourseTeacher;
import com.qxf.pojo.Student;
import com.qxf.pojo.StudentCourse;
import com.qxf.pojo.Grade;
import com.qxf.service.GradeService;

@Controller
public class GradeController {
	@Autowired
	private GradeService gradeService;
	
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
	 * 查找学生列表
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findStudentList")
	    public String findStudentList() {
		   //学生下拉列表
		    List<Student> studentList = gradeService.getStudentList();
	        String jsonString = JSON.toJSONString(studentList);
	        return jsonString;
	    }
	
		/**
		 * 查找学生-课程列表
		 * @param model
		 * @return
		 */
		 @ResponseBody
		 @RequestMapping("/getStudentCourseList")
		    public String getStudentCourseList(StudentCourse sc) {
			   //学生-课程下拉列表
			    List<StudentCourse> majorList = gradeService.getStudentCourseList(sc);
		        String jsonString = JSON.toJSONString(majorList);
		        return jsonString;
		    }
		/**
		 * 查找课程-老师列表
		 * @param model
		 * @return
		 */
		 @ResponseBody
		 @RequestMapping("/getCourseTeacherList")
		    public String getCourseTeacherList(CourseTeacher ct) {
			   //课程-老师下拉列表
			    List<CourseTeacher> clazzList = gradeService.getCourseTeacherList(ct);
		        String jsonString = JSON.toJSONString(clazzList);
		        return jsonString;
		    }		 
	/**
	 * 查找全部成绩
	 * @param model
	 * @return
	 */
	 @ResponseBody
	 @RequestMapping("/findAllGrade")
	    public String findAllGrade(@RequestParam(required = false,defaultValue = "1",value = "pn")Integer pn,Grade grade) {
		    System.out.println("查找条件--->"+grade);
		    PageHelper.startPage(pn, 5);
		    //startPage后紧跟的这个查询就是分页查询
	        List<Grade> list = gradeService.findAllGrade(grade);
	        //使用PageInfo包装查询结果，只需要将pageInfo交给页面就可以
	        PageInfo<Grade> pageInfo = new PageInfo<Grade>(list,5);
	        String jsonString = JSON.toJSONString(pageInfo);
	        return jsonString;
	    }
    /**
     * 根据id查询成绩
     * @param sid
     * @return
     */
    //ajax查询数据
    @ResponseBody
    @RequestMapping("/findGradeById")
    public Grade findGradeById(@RequestParam("id") String id) {
    	System.out.println("查找学号--->"+id);
        return gradeService.findGradeById(id);
    }
    
    @ResponseBody
    @RequestMapping("/deleteGradeById")
    public String deleteGradeById(@RequestParam("id") String id) {
    	Integer flag = gradeService.deleteGradeById(id);
    	if(flag>0) {
    		return JSON.toJSONString("删除成功！");
    	}else {
    		return JSON.toJSONString("删除失败！");   		
    	}
    }
	
    @ResponseBody
    @RequestMapping("/updateGrade")
    public String updateGrade(Grade grade) {
    	Integer flag = gradeService.updateGrade(grade);
    	String msg = "";
    	if(flag>0) {
    		msg = "修改成功";
    	}else {
    		msg = "修改失败"; 		
    	}
    	return JSON.toJSONString(msg);
    }
    
    @ResponseBody
    @RequestMapping("/addGrade")
    public String addGrade(Grade grade) {
    	String uuid = UUID.randomUUID().toString().replace("-", "");
    	grade.setId(uuid);
    	Integer flag = gradeService.addGrade(grade);
    	String msg = "";
    	if(flag>0) {
    		msg +="1";
    	}else {
    		msg += "0"; 		
    	}
    	String studentId = grade.getStudentId();
    	String courseId = grade.getCourseId();
    	String teacherId = grade.getTeacherId();
    	uuid = UUID.randomUUID().toString().replace("-", "");
    	StudentCourse sc = new StudentCourse(uuid, studentId, courseId);
    	uuid = UUID.randomUUID().toString().replace("-", "");
    	CourseTeacher ct = new CourseTeacher(uuid, courseId, teacherId);
    	StudentCourse scFlag = gradeService.findStudentCourseById(sc);
    	//如果当前数据不存在中间表StudentCourse，则插入
    	if(scFlag==null) {
    		msg+=","+gradeService.addStudentCourse(sc);
    	}
    	CourseTeacher ctFlag = gradeService.findCourseTeacherById(ct);
    	if(ctFlag==null) {
    		msg+=","+gradeService.addCourseTeacher(ct);
    	}
    	return msg;
    }
    
}
