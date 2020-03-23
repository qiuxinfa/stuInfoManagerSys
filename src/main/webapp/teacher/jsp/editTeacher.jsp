<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>修改老师信息</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/teacher/js/editTeacher.js"></script>
    
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
    <h3>修改老师信息：</h3>
    <br>
	<form action="${pageContext.request.contextPath }/updateTeacher" method="get" id="editForm" class="center">
           <div>
                       工号：<input type="text" name="id" id="id" value="" readonly="readonly"/>			
		  </div>
		  <div>
		   姓名：<input type="text" name="name" id="name" value=""/>
		  </div>
		  <div>
			职称：<input type="text" name="title" id="title" value=""/>
		  </div>
	    <br><br>
		<input type="hidden" name="id" id="id" value=""></input>
		<input type="button" name="submit" value="确认修改" onclick="updateTeacher()"></input>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="button"  name="close" value="关闭" onclick="closePage()"></input>
		
	</form>
</body>
</html>