//页面加载时执行，查找全部学生列表
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
         //初始化专业下拉选择
  		  var option = "<option value=-1>请选择</option>";
          $("#selectMajor").append(option);
          $("#selectMajor option[value='-1']").attr("selected", true);
          //初始化班级下拉选择
   		  option = "<option value=-1>请选择</option>";
          $("#selectClazz").append(option);
          $("#selectClazz option[value='-1']").attr("selected", true);        
        
        //学生列表
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findAllStudent",
                   data: {"clazzId":$("#clazzId").val(),"name":$("#name").val(),"id":$("#id").val(),"phone":$("#phone").val(),
                	   "age":$("#age").val(),"sex":$("#sex").val(),"majorId":$("#majorId").val(),"instituteId":$("#instituteId").val()},
                   dataType: "json",
                   success: function (studentList) {
                	   for(var i=0;i<studentList.length;i++){
                		   var data = studentList[i];
                		   var time = new Date(data.birthday);
                		   var sex='';
                		   var birthday=myformatter(time);
                		   var operation="<a href=\"/stuInfoManagerSys/student/jsp/addStudent.jsp\">添加</a>"
                			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteStudent("+ data.id +")\"  class='buttonClass'>删除</button>"
                		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/student/jsp/editStudent.jsp?id="+ data.id +"\">修改</a>";
                		   if(data.sex==1){
                			   sex='男';
                		   }else if(data.sex==2){
                			   sex='女';
                		   }
                           var tr = "";
                           tr +=
                               "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.clazzId + "</td><td>" + data.name
                               + "</td><td>" + sex + "</td><td>" + data.age + "</td><td>" + data.phone + "</td><td>" + data.majorId + "</td><td>" 
                               + data.instituteId + "</td><td>" + operation +"</td>";
                           $("tbody").append('<tr>'+tr+'</tr>');
                	   }
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//根据id删除学生
function deleteStudent(id){
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/deleteStudentById",
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

//根据条件查找学生
function searchStudent(){
	var id = $("#id").val();
	var name = $("#name").val();
	var sex = $('input:radio[name="sex"]:checked').val();
	if(sex=="undefined"){
		sex='';
	}
	if(isNaN(sex)){
		sex='';
		debugger;
	}
	if(sex!=''){
		sex = parseInt(sex);
	}
	var age = $("#age").val();
	var phone = $("#phone").val();
	var clazzId = $('#selectClazz option:selected').val();
	var majorId = $('#selectMajor option:selected').val();
	var instituteId = $('#selectInstitute option:selected').val();
	debugger;
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllStudent",
        data: {"id":id,"name":name,"sex":sex,"age":age,"clazzId":clazzId,"phone":phone,"majorId":majorId,"instituteId":instituteId},
        dataType: "json",
        success: function (studentList) {
            $("tbody").html(""); //清除原来的数据
      	   for(var i=0;i<studentList.length;i++){
      		   var data = studentList[i];
      		   var time = new Date(data.birthday);
      		   var sex='';
      		   var birthday=myformatter(time);
      		   var operation="<a href=\"/stuInfoManagerSys/student/jsp/addStudent.jsp\">添加</a>"
      			             + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=\"deleteStudent("+ data.id +")\" class='buttonClass'>删除</button>"
      		                 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"/stuInfoManagerSys/student/jsp/editStudent.jsp?id="+ data.id +"\">修改</a>";
      		   if(data.sex==1){
      			   sex='男';
      		   }else if(data.sex==2){
      			   sex='女';
      		   }
                 var tr = "";
                 tr +=
                     "<td>"+(i+1)+"</td><td>" + data.id + "</td><td>" + data.clazzId + "</td><td>" + data.name
                     + "</td><td>" + sex + "</td><td>" + data.age + "</td><td>" + data.phone + "</td><td>" 
                     + data.majorId + "</td><td>" + data.instituteId + "</td><td>" + operation +"</td>";
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
	$("#phone").val("");
	$("#age").val("");
	$("input[type='radio']").each(function(){
//		 $(this).attr("checked",false);
		this.checked=false;
	});
	
	$("#selectClazz").val("-1");
	$("#selectMajor").val("-1");
	$("#selectInstitute").val("-1");
//	$("#selectClazz option[value='-1']").attr("selected", true);
//	$("#selectMajor option[value='-1']").attr("selected", true);
//	$("#selectInstitute option[value='-1']").attr("selected", true);

	//无条件查询
	searchStudent();
}

//格式化时间yyyy-mm-dd
function myformatter(date){  
    var strDate = date.getFullYear()+"-";
    strDate += date.getMonth()+1+"-";
    strDate += date.getDate();
    return strDate ;
}

//当学院改变时触发
function instituteChange(){
	//清空专业和班级下拉列表的内容
	$("#selectClazz").empty();
	$("#selectMajor").empty();
	//获取学院的选中的id
	var instituteId = $('#selectInstitute option:selected').val();
	//异步请求获取该学院下的专业列表
    //专业下拉列表
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findMajorList",
        dataType: "json",
        data:{"instituteId":instituteId},
        success: function (instituteList) {
     	   for(var i=0;i<instituteList.length;i++){
     		   var data = instituteList[i];
     		   var option = "<option value="+data.id+">"+data.name+"</option>";
               $("#selectMajor").append(option);
     	   }
  		  var option = "<option value=-1>请选择</option>";
          $("#selectMajor").append(option);
          $("#selectMajor option[value='-1']").attr("selected", true);
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("专业列表获取失败！");
        }
    })	
}

//当专业改变时触发
function majorChange(){
	//清空班级下拉列表的内容
	$("#selectClazz").empty();
	//获取专业下的选中的id
	var majorId = $('#selectMajor option:selected').val();
	//异步请求获取该学院下的专业列表
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findClazzList",
        dataType: "json",
        data:{"majorId":majorId},
        success: function (instituteList) {
     	   for(var i=0;i<instituteList.length;i++){
     		   var data = instituteList[i];
     		   var option = "<option value="+data.id+">"+data.name+"</option>";
               $("#selectClazz").append(option);
     	   }
   		  var option = "<option value=-1>请选择</option>";
          $("#selectClazz").append(option);
          $("#selectClazz option[value='-1']").attr("selected", true);
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("班级列表获取失败！");
        }
    })
    
}



