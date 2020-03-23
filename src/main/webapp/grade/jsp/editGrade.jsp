<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>修改成绩信息</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/grade/js/editGrade.js"></script>
    
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
    <h3>修改成绩信息：</h3>
    <br>
	<form action="${pageContext.request.contextPath }/updateGrade" method="get" id="editForm" class="center">
          <div>
                       考试号：<input type="text" name="id" id="id" value="" readonly="readonly"/>		
		  </div>
		  <div>
		  考试时间：<input type="date" name="examTime" id="examTime" value=""/>
		  </div>
		  <div>
			考试类型：<input type="text" name="examType" id="examType" value=""/>
		  </div>
		  <div>
			学生姓名： <select  id="selectStudent" disabled="disabled">
			    </select>
		  </div>
		  <div>
			考试课程：<select  id="selectCourse"  disabled="disabled">
			    </select>
		  </div>
		  <div>
			任课老师：<select  id="selectTeacher"  disabled="disabled">
			    </select>
		  </div>
		  <div>
		       成绩：<input type="text" name="score" id="score" value=""/>
		  </div>
	  <br>
	    <br><br>
		<input type="hidden" name="id" id="id" value=""></input>
		<input type="button" name="submit" value="确认修改" onclick="updateGrade()"></input>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<input type="button"  name="close" value="关闭" onclick="closePage()"></input>
		
	</form>
</body>
</html>