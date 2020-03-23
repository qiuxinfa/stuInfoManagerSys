//页面加载时执行，查找全部课程列表
    $(function () {
        //课程列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllCourse",
                   data: {"name":$("#name").val(),"id":$("#id").val()},
                   dataType: "json",
                   success: function (courseList) {
                	   for(var i=0;i<courseList.length;i++){
                		   var data = courseList[i];
                		   var operation="<a href=\"/stuInfoManagerSys/course/jsp/addCourse.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteCourse(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/course/jsp/editCourse.jsp?id="+ data.id +"\">修改</a>";
                		   var tr = "";
                           tr +=
                               "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + operation +"</td>";
                           $("tbody").append('<tr>'+tr+'</tr>');
                	   }
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//根据id删除课程
function deleteCourse(id){
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteCourseById",
        data: {"id":id},
        dataType: "json",
        success: function(data){
        	alert("删除成功");
        	window.location.reload(); //刷新当前页面.
        	//parent.location.reload(); //刷新父亲对象（用于框架）
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("删除失败");
        }
    })
}

//根据条件查找课程
function searchCourse(){
	var id = $("#id").val();
	var name = $("#name").val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllCourse",
        data: {"id":id,"name":name},
        dataType: "json",
        success: function (courseList) {
            $("tbody").html(""); //清除原来的数据
      	   for(var i=0;i<courseList.length;i++){
      		   var data = courseList[i];
    		   var operation="<a href=\"/stuInfoManagerSys/course/jsp/addCourse.jsp\">添加</a>"
		             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteCourse(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
	                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/course/jsp/editCourse.jsp?id="+ data.id +"\">修改</a>";
			   var tr = "";
		     tr +=
		         "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + operation +"</td>";
		     $("tbody").append('<tr>'+tr+'</tr>');
      	   }
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
	$("#name").val("");
	//无条件查询
	searchCourse();
}
