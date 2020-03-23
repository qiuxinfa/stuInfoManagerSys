//页面加载时执行，查找全部学院列表
    $(function () {
        //学院列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllInstitute",
                   data: {"name":$("#name").val(),"id":$("#id").val()},
                   dataType: "json",
                   success: function (instituteList) {
                	   for(var i=0;i<instituteList.length;i++){
                		   var data = instituteList[i];
                		   var operation="<a href=\"/stuInfoManagerSys/institute/jsp/addInstitute.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteInstitute(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/institute/jsp/editInstitute.jsp?id="+ data.id +"\">修改</a>";
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

//根据id删除学院
function deleteInstitute(id){
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteInstituteById",
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

//根据条件查找学院
function searchInstitute(){
	var id = $("#id").val();
	var name = $("#name").val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllInstitute",
        data: {"id":id,"name":name},
        dataType: "json",
        success: function (instituteList) {
            $("tbody").html(""); //清除原来的数据
      	   for(var i=0;i<instituteList.length;i++){
      		   var data = instituteList[i];
    		   var operation="<a href=\"/stuInfoManagerSys/institute/jsp/addInstitute.jsp\">添加</a>"
		             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteInstitute(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
	                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/institute/jsp/editInstitute.jsp?id="+ data.id +"\">修改</a>";
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
	searchInstitute();
}
