//页面加载时执行，查找全部专业列表
    $(function () {
    	//学院下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findInstituteList",
            dataType: "json",
            success: function (instituteList) {
         	   for(var i=0;i<instituteList.length;i++){
         		   var data = instituteList[i];
         		   var option = "<option value="+data.id+">"+data.name+"</option>";
                   $("#selectInstitute").append(option);
         	   }
     		  var option = "<option value=-1>请选择</option>";
              $("#selectInstitute").append(option);
              $("#selectInstitute option[value='-1']").attr("selected", true);
         	 
            },
            //null值不会被success回调函数捕获，因此可以通过error来实现该功能
            error: function () {
                alert("学院列表获取失败！");
            }
        })
        
        //专业列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllMajor",
                   data: {"name":$("#name").val(),"id":$("#id").val()},
                   dataType: "json",
                   success: function (majorList) {
                	   for(var i=0;i<majorList.length;i++){
                		   var data = majorList[i];
                		   var operation="<a href=\"/stuInfoManagerSys/major/jsp/addMajor.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteMajor(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/major/jsp/editMajor.jsp?id="+ data.id +"\">修改</a>";
                		   var tr = "";
                           tr +=
                               "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + data.instituteId + "</td><td>" + operation +"</td>";
                           $("tbody").append('<tr>'+tr+'</tr>');
                	   }
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//根据id删除专业
function deleteMajor(id){
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteMajorById",
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

//根据条件查找专业
function searchMajor(){
	var id = $("#id").val();
	var name = $("#name").val();
	var instituteId = $('#selectInstitute option:selected').val();
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllMajor",
        data: {"id":id,"name":name,"instituteId":instituteId},
        dataType: "json",
        success: function (majorList) {
            $("tbody").html(""); //清除原来的数据
      	   for(var i=0;i<majorList.length;i++){
      		   var data = majorList[i];
    		   var operation="<a href=\"/stuInfoManagerSys/major/jsp/addMajor.jsp\">添加</a>"
		             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteMajor(\'" + data.id +"\')\"  class='buttonClass'>删除</button>"
	                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/major/jsp/editMajor.jsp?id="+ data.id +"\">修改</a>";
			   var tr = "";
		     tr +=
		         "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.name + "</td><td>" + data.instituteId + "</td><td>" + operation +"</td>";
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
	$("#selectInstitute").val("-1");
	//无条件查询
	searchMajor();
}
