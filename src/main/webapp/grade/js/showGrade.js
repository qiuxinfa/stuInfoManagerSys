//页面加载时执行，查找全部成绩列表
    $(function () {
    	//学生下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findStudentList",
            dataType: "json",
            success: function (instituteList) {
         	   for(var i=0;i<instituteList.length;i++){
         		   var data = instituteList[i];
         		   var option = "<option value="+data.id+">"+data.name+"</option>";
                   $("#selectStudent").append(option);
         	   }
     		  var option = "<option value=-1>请选择</option>";
              $("#selectStudent").append(option);
              $("#selectStudent option[value='-1']").attr("selected", true);
         	 
            },
            //null值不会被success回调函数捕获，因此可以通过error来实现该功能
            error: function () {
                alert("学院列表获取失败！");
            }
        })
         //初始化学生-课程下拉选择
  		  var option = "<option value=-1>请选择</option>";
          $("#selectCourse").append(option);
          $("#selectCourse option[value='-1']").attr("selected", true);
          //初始化课程-老师下拉选择
   		  option = "<option value=-1>请选择</option>";
          $("#selectTeacher").append(option);
          $("#selectTeacher option[value='-1']").attr("selected", true);        
        
        //成绩列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllGrade",
                   dataType: "json",
                   success: function (pageInfo) {
                	   var gradeList = pageInfo.list;
                	   for(var i=0;i<gradeList.length;i++){
                		   var data = gradeList[i];
                		   var tmp = new Date(data.examTime);
                		   var examTime = myformatter(tmp);
                		   var operation="<a href=\"/stuInfoManagerSys/grade/jsp/addGrade.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteGrade(\'"+ data.id +"\')\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/grade/jsp/editGrade.jsp?id="+ data.id +"\">修改</a>";
                           var tr = "";
                           tr +=
                               "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + examTime + "</td><td>" + data.examType
                               + "</td><td>" + data.studentId + "</td><td>" + data.courseId + "</td><td>" + data.teacherId + "</td><td>" + data.score + "</td><td>" 
                               + operation + "</td>";
                           $("tbody").append('<tr>'+tr+'</tr>');
                	   }
                	   
                  	   //设置分页信息
                  	   var fenye="<button onclick=\"toFenye(\'"+ 1 +"\')\"  class='buttonClass'>首页</button>"
                  		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pageNum-1) +"\')\"  class='buttonClass'>上一页</button>"
                  		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pageNum+1) +"\')\"  class='buttonClass'>下一页</button>"
                  		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pages) +"\')\"  class='buttonClass'>尾页</button>"
                             + "&nbsp;&nbsp;&nbsp;&nbsp;当前第"+ (pageInfo.pageNum) +"页&nbsp;&nbsp;总共"+ (pageInfo.pages) +"页&nbsp;&nbsp;总共"+(pageInfo.total) +"条记录";
            				
            	             $("#fenye").append(fenye);     
//                             + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum-1) +"\">上一页</a>"
//                             + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum+1) +"\">下一页</a>"
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//根据id删除成绩
function deleteGrade(id){
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteGradeById",
        data: {"id":id},
        dataType: "json",
        success: function(data){
        	alert(data);
        	window.location.reload(); //刷新当前页面.
        	//parent.location.reload(); //刷新父亲对象（用于框架）
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("删除失败");
        }
    })
}

//根据条件查找成绩
function searchGrade(){
	var id = $("#id").val();
	var examTime = $("#examTime").val();
	var examType = $("#examType").val();
	var score = $("#score").val();
	if(score==null || score==''){
		score=0;
	}
	var studentId = $('#selectStudent option:selected').val();
	var courseId = $('#selectCourse option:selected').val();
	var teacherId = $('#selectTeacher option:selected').val();
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllGrade",
        data: {"id":id,"examTime":examTime,"examType":examType,"score":score,"studentId":studentId,"courseId":courseId,"teacherId":teacherId},
        dataType: "json",
        success: function (pageInfo) {
            $("tbody").html(""); //清除原来的数据
           var gradeList = pageInfo.list;
      	   for(var i=0;i<gradeList.length;i++){
      		   var data = gradeList[i];
    		   var tmp = new Date(data.examTime);
    		   var examTime = myformatter(tmp);
    		   var operation="<a href=\"/stuInfoManagerSys/grade/jsp/addGrade.jsp\">添加</a>"
		             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteGrade("+ data.id +")\"  class='buttonClass'>删除</button>"
	                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/grade/jsp/editGrade.jsp?id="+ data.id +"\">修改</a>";
		     var tr = "";
		     tr +=
		         "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + examTime + "</td><td>" + data.examType
		         + "</td><td>" + data.studentId + "</td><td>" + data.courseId + "</td><td>" + data.teacherId + "</td><td>" + data.score + "</td><td>" 
		         + operation + "</td>";
		     $("tbody").append('<tr>'+tr+'</tr>');
      	   }
      	   //设置分页信息
      	   var fenye="<a href=\"/stuInfoManagerSys/findAllGrade?pn=1\">首页</a>"
                 + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum-1) +"\">上一页</a>"
                 + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum+1) +"\">下一页</a>"
                 + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pages) +"\">尾页</a>"
                 + "&nbsp;&nbsp;&nbsp;&nbsp;当前第"+ (pageInfo.pageNum) +"页&nbsp;&nbsp;&nbsp;&nbsp;总共"+ (pageInfo.total) +"条记录";
				
	             $("#fenye").append(fenye);

         },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("查找失败");
        }
    })	
}

//重置
function clearForm(){
    //清空查询条件
	$("#id").val("");
	$("#examTime").val("");
	$("#examType").val("");
	$("#score").val("");	
	$("#selectStudent").val("-1");
	$("#selectCourse").val("-1");
	$("#selectTeacher").val("-1");

	//无条件查询
	searchGrade();
}

//格式化时间yyyy-mm-dd
function myformatter(date){  
    var strDate = date.getFullYear()+"-";
    strDate += date.getMonth()+1+"-";
    strDate += date.getDate();
    return strDate ;
}

//当学生改变时触发
function studentChange(){
	//清空下拉列表的内容
	$("#selectCourse").empty();
	$("#selectTeacher").empty();
	//获取学生的选中的id
	var studentId = $('#selectStudent option:selected').val();
	//异步请求获取该学院下的专业列表
    //专业下拉列表
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/getStudentCourseList",
        dataType: "json",
        data:{"studentId":studentId},
        success: function (instituteList) {
     	   for(var i=0;i<instituteList.length;i++){
     		   var data = instituteList[i];
     		   var option = "<option value="+data.id+">"+data.name+"</option>";
               $("#selectCourse").append(option);
     	   }
  		  var option = "<option value=-1>请选择</option>";
          $("#selectCourse").append(option);
          $("#selectCourse option[value='-1']").attr("selected", true);
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("课程列表获取失败！");
        }
    })	
}

//当课程改变时触发
function courseChange(){
	//清空老师下拉列表的内容
	$("#selectTeacher").empty();
	//获取专业下的选中的id
	var courseId = $('#selectCourse option:selected').val();
	//异步请求获取该学院下的专业列表
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/getCourseTeacherList",
        dataType: "json",
        data:{"courseId":courseId},
        success: function (instituteList) {
     	   for(var i=0;i<instituteList.length;i++){
     		   var data = instituteList[i];
     		   var option = "<option value="+data.id+">"+data.name+"</option>";
               $("#selectTeacher").append(option);
     	   }
   		  var option = "<option value=-1>请选择</option>";
          $("#selectTeacher").append(option);
          $("#selectTeacher option[value='-1']").attr("selected", true);
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("老师列表获取失败！");
        }
    })
    
}

//分页触发
function toFenye(pn){
	alert("pn=="+pn);
    //成绩列表
    $.ajax({
               type: "post",
               data:{"pn":pn},
               url: "/stuInfoManagerSys/findAllGrade",
               dataType: "json",
               success: function (pageInfo) {
            	   $("tbody").html(""); //清除原来的数据
            	   $("#fenye").html(""); //清除原来的数据
            	   var gradeList = pageInfo.list;
            	   for(var i=0;i<gradeList.length;i++){
            		   var data = gradeList[i];
            		   var tmp = new Date(data.examTime);
            		   var examTime = myformatter(tmp);
            		   var operation="<a href=\"/stuInfoManagerSys/grade/jsp/addGrade.jsp\">添加</a>"
            			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteGrade(\'"+ data.id +"\')\"  class='buttonClass'>删除</button>"
            		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/grade/jsp/editGrade.jsp?id="+ data.id +"\">修改</a>";
                       var tr = "";
                       tr +=
                           "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + examTime + "</td><td>" + data.examType
                           + "</td><td>" + data.studentId + "</td><td>" + data.courseId + "</td><td>" + data.teacherId + "</td><td>" + data.score + "</td><td>" 
                           + operation + "</td>";
                       $("tbody").append('<tr>'+tr+'</tr>');
            	   }
            	   
              	   //设置分页信息
              	   var fenye="<button onclick=\"toFenye(\'"+ 1 +"\')\"  class='buttonClass'>首页</button>"
              		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pageNum-1) +"\')\"  class='buttonClass'>上一页</button>"
              		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pageNum+1) +"\')\"  class='buttonClass'>下一页</button>"
              		     + "&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"toFenye(\'"+ (pageInfo.pages) +"\')\"  class='buttonClass'>尾页</button>"
                         + "&nbsp;&nbsp;&nbsp;&nbsp;当前第"+ (pageInfo.pageNum) +"页&nbsp;&nbsp;总共"+ (pageInfo.pages) +"页&nbsp;&nbsp;总共"+(pageInfo.total) +"条记录";
        				
        	             $("#fenye").append(fenye);     
//                         + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum-1) +"\">上一页</a>"
//                         + "&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/findAllGrade?pn="+ (pageInfo.pageNum+1) +"\">下一页</a>"
               },
               //null值不会被success回调函数捕获，因此可以通过error来实现该功能
               error: function () {
                   alert("初始化：查找失败！");
               }
           })
	
}

