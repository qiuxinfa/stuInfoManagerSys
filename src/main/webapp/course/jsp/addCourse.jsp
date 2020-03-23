<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>新增课程信息</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/course/js/addCourse.js"></script>
    
    <style type="text/css">
       label{
    		margin-top: 100px;
    		margin-left:500px;
    	}

       .center{
       		text-align:center;
       }
       
       h3{
       	    margin-top: 80px;
    		margin-left:100px;
       }
    </style>
</head>
<body>
    <h3>新增课程信息：</h3>
    <br>
	<form action="${pageContext.request.contextPath }/addCourse" method="get" id="addForm" class="center">
          <div>
                       <input type="text" name="id" id="id" value="" hidden="hidden"/>			
		  </div>
		  <div>
		   课程名：<input type="text" name="name" id="name" value=""/>
		  </div>
	    <br><br>
		<input type="button" name="submit" value="添加" onclick="addCourse()"></input>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="button"  name="close" value="关闭" onclick="closePage()"></input>
		
	</form>
</body>
</html>