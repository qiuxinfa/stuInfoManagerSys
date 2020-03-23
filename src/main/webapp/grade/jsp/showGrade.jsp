<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<html>
<head>
    <title>成绩管理</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/grade/js/showGrade.js"></script>
   
    <style type="text/css">
       label{
    		margin-top: 100px;
    		margin-left:500px;
    	}

       .center{
       		text-align:center;
       }
       
/*         table{  
		    border-collapse:collapse; 
		    border-spacing:0;
		    margin:0;
		    padding:0;
		    border:none; 
		    align-content: center;
       }  */
    
       td{
/*             border-collapse:collapse; 
            border-spacing:0;
		    margin:0;
		    padding:0; */
   		    text-align:center;
   	   }
   	   
   	   a{ 
   	   		text-decoration:none;
   	   		display: inline-block; 
   	   		text-align: center; 
   	   }
   	   button{
            margin: 0;
            padding: 0;
            font-size: 100%;
        }
       
       .buttonClass{
       		background-color: white!important;
       		color: blue;
            border: 0px;  
            margin-right: -1px;  
            margin-bottom: -1px;  
            
       }
       
       .form-right{
       		text-align:center;
       }
       
       .search{
       		margin-top:30px;
       }
    </style>
</head>

<body>
    <br>
	<!-- 查询条件 -->
	<div class="search">
	<label>查找条件：</label><br/>
	<form action="${pageContext.request.contextPath }/findAllGrade" method="get" id="searchForm" class="center">
          <div>
                       考试号：<input type="text" name="id" id="id" value=""/>		
		  </div>
		  <div>
		  考试时间：<input type="date" name="examTime" id="examTime" value=""/>
		  </div>
		  <div>
			考试类型：<input type="text" name="examType" id="examType" value=""/>
		  </div>
		  <div>
			学生姓名： <select  id="selectStudent" onchange="studentChange()">
			    </select>
		  </div>
		  <div>
			考试课程：<select  id="selectCourse" onchange="courseChange()">
			    </select>
		  </div>
		  <div>
			任课老师：<select  id="selectTeacher">
			    </select>
		  </div>
		  <div>
		       成绩：<input type="text" name="score" id="score" value=""/>
		  </div>
	  <br>
	  <input type="button" onclick="searchGrade()" value="查找"/>
	  &nbsp;&nbsp;&nbsp;&nbsp;
	  <input type="button" onclick="clearForm()" value="重置"/>
	 </form>
	</div>
	
	<br/><br/>
	
	<!-- 结果列表 -->
	<label>结果列表：</label><br/><br/><br/>
	<table width="50%" border="1" align="center" cellspacing="0" cellpadding="0" id="show">
	   <thead>
			<tr align="center">
				<th>序号</th>
				<th>考试号</th>
				<th>考试时间</th>
				<th>考试类型</th>
				<th>学生姓名</th>
				<th>考试课程</th>
				<th>任课老师</th>
				<th>成绩</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>

		</tbody>
	</table>
    
    <!-- 分页信息 -->
    <div id="fenye" class="center">
    	
    </div>
    
</body>
</html>
 