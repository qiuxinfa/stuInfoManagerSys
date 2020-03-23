<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>修改学生信息</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/student/js/editStudent.js"></script>
    
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
    <h3>修改学生信息：</h3>
    <br>
	<form action="${pageContext.request.contextPath }/updateStudent" method="get" id="editForm" class="center">
                       学号：<input type="text" name="id" id="id" value="" readonly="readonly"/>
			 &nbsp;&nbsp;&nbsp;&nbsp;
			学院： <select  id="selectInstitute" onchange="instituteChange()">
			    </select>
			
		  </div>
		  <div>
		   姓名：<input type="text" name="name" id="name" value=""/>
			&nbsp;&nbsp;&nbsp;&nbsp;
			专业：<select  id="selectMajor" onchange="majorChange()">
			    </select>
		  </div>
		  <div>
			电话：<input type="text" name="phone" id="phone" value=""/>
			&nbsp;&nbsp;&nbsp;&nbsp;
			班级：<select  id="selectClazz">
			    </select>
		  </div>
		  <div>
		       年龄：<input type="text" name="age" id="age" value=""/>
			&nbsp;&nbsp;&nbsp;&nbsp;
			性别：<input type="radio" name="sex" value="1"></input>男
			<input type="radio" name="sex" value="2" ></input>女
		  </div>
	  <br>
	    <br><br>
		<input type="hidden" name="id" id="id" value=""></input>
		<input type="button" name="submit" value="确认修改" onclick="updateStudent()"></input>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="button"  name="close" value="关闭" onclick="closePage()"></input>
		
	</form>
</body>
</html>