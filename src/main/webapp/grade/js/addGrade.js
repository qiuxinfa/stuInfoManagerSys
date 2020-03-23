//页面加载时执行
$(function(){
    	//学生下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findAllStudent",
            dataType: "json",
            success: function (studentList) {
         	   for(var i=0;i<studentList.length;i++){
         		   var data = studentList[i];
         		   var option = "<option value="+data.id+">"+data.name+"</option>";
                   $("#selectStudent").append(option);
         	   }
     		  var option = "<option value=-1>请选择</option>";
              $("#selectStudent").append(option);
              $("#selectStudent option[value='-1']").attr("selected", true);
         	 
            },
            //null值不会被success回调函数捕获，因此可以通过error来实现该功能
            error: function () {
                alert("学生列表获取失败！");
            }
        })
        
    //课程下拉列表
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllCourse",
        dataType: "json",
        data:{},
        success: function (studentList) {
     	   for(var i=0;i<studentList.length;i++){
     		   var data = studentList[i];
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

    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/findAllTeacher",
        dataType: "json",
        data:{},
        success: function (studentList) {
     	   for(var i=0;i<studentList.length;i++){
     		   var data = studentList[i];
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
        
        	
});

//根据id新增成绩信息
function addGrade(){
	//var id = $("#id").val();
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
        url: "/stuInfoManagerSys/addGrade",
        data: {"examTime":examTime,"examType":examType,"score":score,"studentId":studentId,"courseId":courseId,"teacherId":teacherId},
        dataType: "text",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!teacherId || teacherId==-1){
				alert("老师必选!");
				return false;
			}
			if(!courseId || courseId==-1){
				alert("课程必选!");
				return false;
			}
			if(!score){
				alert("成绩必填!");
				$("#score").focus();//获取焦点
				return false;
			}
			if(!studentId || studentId==-1){
				alert("学生必选!");
				return false;
			}
        },
        success: function (data) {
        	//var str = eval("(" + data + ")");
        	alert("data的类型--->"+typeof(data));
        	var msg = data.split(",");
            if(msg[0]==1){
            	alert("新增成功！");
            }else{
            	alert("新增失败！");
            }
            if(msg[1]==1){
            	alert("成功插入中间表StudentCourse");
            }
            if(msg[2]==1){
            	alert("成功插入中间表CourseTeacher");
            }    
            window.location.href="/stuInfoManagerSys/grade/jsp/showGrade.jsp";
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("添加失败");
        }
    })
}
//关闭当前页面，返回上一级页面
function closePage(){
	window.history.back();  //返回上一页
	window.close();	
}

////当学生改变时触发
//function studentChange(){
//	//清空课程和老师下拉列表的内容
//	$("#selectTeacher").empty();
//	$("#selectCourse").empty();
//	//获取学生的选中的id
//	var studentId = $('#selectStudent option:selected').val();
//	//异步请求获取该学生下的课程列表
//    //课程下拉列表
//    $.ajax({
//        type: "post",
//        url: "/stuInfoManagerSys/getStudentCourseList",
//        dataType: "json",
//        data:{"studentId":studentId},
//        success: function (studentList) {
//     	   for(var i=0;i<studentList.length;i++){
//     		   var data = studentList[i];
//     		   var option = "<option value="+data.id+">"+data.name+"</option>";
//               $("#selectCourse").append(option);
//     	   }
//  		  var option = "<option value=-1>请选择</option>";
//          $("#selectCourse").append(option);
//          $("#selectCourse option[value='-1']").attr("selected", true);
//        },
//        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
//        error: function () {
//            alert("课程列表获取失败！");
//        }
//    })	
//}
//
////当课程改变时触发
//function courseChange(){
//	//清空老师下拉列表的内容
//	$("#selectTeacher").empty();
//	//获取课程下的选中的id
//	var courseId = $('#selectCourse option:selected').val();
//	//异步请求获取该学生下的课程列表
//    $.ajax({
//        type: "post",
//        url: "/stuInfoManagerSys/getCourseTeacherList",
//        dataType: "json",
//        data:{"courseId":courseId},
//        success: function (studentList) {
//     	   for(var i=0;i<studentList.length;i++){
//     		   var data = studentList[i];
//     		   var option = "<option value="+data.id+">"+data.name+"</option>";
//               $("#selectTeacher").append(option);
//     	   }
//   		  var option = "<option value=-1>请选择</option>";
//          $("#selectTeacher").append(option);
//          $("#selectTeacher option[value='-1']").attr("selected", true);
//        },
//        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
//        error: function () {
//            alert("老师列表获取失败！");
//        }
//    })
//    
//}

