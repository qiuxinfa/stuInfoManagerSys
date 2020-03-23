<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<html>
<head>
    <title>专业管理</title>
    <script type="text/javascript" src="${pageContext.request.contextPath }/common/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath }/major/js/showMajor.js"></script>
   
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
	<form action="${pageContext.request.contextPath }/findAllMajor" method="get" id="searchForm" class="center">
          <div>
                       专业号：<input type="text" name="id" id="id" value=""/>			
		  </div>
		  <div>
		   专业名：<input type="text" name="name" id="name" value=""/>
		  </div>
		  <div>
		所属学院：<select  id="selectInstitute">
			    </select>
		  </div>
	  <br>
	  <input type="button" onclick="searchMajor()" value="查找"/>
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
				<th>专业号</th>
				<th>专业名</th>
				<th>所属学院</th>
				<th>操作</th>
			</tr>
		</thead>
		<tbody>

		</tbody>
	</table>
</body>
</html>
 