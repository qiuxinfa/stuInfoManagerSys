//页面加载时执行，查找全部老师列表
    $(function () {
        //老师列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllTeacher",
                   data: {"name":$("#name").val(),"id":$("#id").val(),"title":$("#title").val()},
                   dataType: "json",
                   success: function (teacherList) {
                	   for(var i=0;i<teacherList.length;i++){
                		   var data = teacherList[i];
                		   var operation="<a href=\"/stuInfoManagerSys/teacher/jsp/addTeacher.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteTeacher(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/teacher/jsp/editTeacher.jsp?id="+ data.id +"\">修改</a>";
                		   var tr = "";
                           tr +=
                               "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + data.title + "</td><td>" + operation +"</td>";
                           $("tbody").append('<tr>'+tr+'</tr>');
                	   }
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//根据id删除老师
function deleteTeacher(id){
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteTeacherById",
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

//根据条件查找老师
function searchTeacher(){
	var id = $("#id").val();
	var name = $("#name").val();
	var title = $("#title").val();
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllTeacher",
        data: {"id":id,"name":name,"title":title},
        dataType: "json",
        success: function (teacherList) {
            $("tbody").html(""); //清除原来的数据
      	   for(var i=0;i<teacherList.length;i++){
      		   var data = teacherList[i];
      		   var operation="<a href=\"/stuInfoManagerSys/teacher/jsp/addTeacher.jsp\">添加</a>"
      			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteTeacher(\'"+ data.id +"\')\" class='buttonClass'>删除</button>"
      		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/teacher/jsp/editTeacher.jsp?id="+ data.id +"\">修改</a>";
                 var tr = "";
                 tr +=
                     "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + data.title + "</td><td>" + operation +"</td>";
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
	$("#title").val("");
	//无条件查询
	searchTeacher();
}
