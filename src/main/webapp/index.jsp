<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
<head>
    <title>首页</title>
    
    <style type="text/css">
    	*{
    		text-align:center;
    	}
    	
    	h1{
    		margin-top: 20px;
    	}
    	
    	h2{
    		font-size: 20px;
    	}
    </style>
    
</head>

<body>
	<h1>欢迎使用学生信息管理系统</h1>
	<br><br>
	<h2><a href="${pageContext.request.contextPath }/student/jsp/showStudent.jsp">学生管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/teacher/jsp/showTeacher.jsp">教师管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/course/jsp/showCourse.jsp">课程管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/institute/jsp/showInstitute.jsp">学院管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/major/jsp/showMajor.jsp">专业管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/clazz/jsp/showClazz.jsp">班级管理</a></h2>
	<h2><a href="${pageContext.request.contextPath }/grade/jsp/showGrade.jsp">成绩管理</a></h2>
</body>
</html>
