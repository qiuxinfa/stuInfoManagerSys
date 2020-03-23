<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>用户登录</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/login.js"></script>
    
    <style type="text/css">
     .center{
            margin-top:50px;
       		text-align:center;
       }
    </style>
</head>
<body>
    <br>
	<form action="${pageContext.request.contextPath }/userLogin" method="post" class="center">
	      <div>
	      	用户名：<input type="text" name="username" id="username"/>
	      </div>
	      <div>
	      	密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" name="password" id="password"/>
	      </div>
		  <div>
		  用户类型：
			<input type="radio" name="userType" value="1"></input>管理员
			<input type="radio" name="userType" value="2" ></input>老师
			<input type="radio" name="userType" value="3" ></input>学生
		  </div>
	  <br>
	    <br><br>
		<input type="button" name="submit" value="登录" onclick="userLogin()"></input>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="button"  name="register" value="注册" onclick="userRegister()"></input>
		
	</form>
</body>
</html>