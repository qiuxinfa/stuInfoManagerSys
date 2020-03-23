//页面加载时执行，查找全部成绩列表
    $(function () {
    	//学生下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findStudentList",
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
            url: "/stuInfoManagerSys/getStudentCourseList",
            dataType: "json",
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
        
        //老师下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/getCourseTeacherList",
            dataType: "json",
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
    	
        var a=GetRequest();
        console.log("id:"+a['id']); //打印出传过来的id
        var id=a['id'];
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findGradeById",
                   data: {"id":id},
                   dataType: "json",
                   success: function (grade) {
                	  $("#selectTeacher").val(grade.teacherId);
                	  $("#selectCourse").val(grade.courseId);
                	  $("#selectStudent").val(grade.studentId);
                	  $("#examTime").val(grade.examTime);
                	  $("#id").val(grade.id);
                	  $("#examType").val(grade.examType);
                	  $("#score").val(grade.score);               	                	 
                   },
                   //null值不会被success回调函数捕获，因此可以通过error来实现该功能
                   error: function () {
                       alert("初始化：查找失败！");
                   }
               })
    });

//获取参数值     
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
     if (url.indexOf("?") != -1) {
           var str = url.substr(1);
           strs = str.split("&");
           for (var i = 0; i < strs.length; i++) {
               theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
           }
       }
       return theRequest;   
 }  

//根据id更新成绩信息
function updateGrade(){
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
        url: "/stuInfoManagerSys/updateGrade",
        data: {"id":id,"examTime":examTime,"examType":examType,"score":score,"studentId":studentId,"courseId":courseId,"teacherId":teacherId},
        dataType: "json",
        success: function (data) {
            alert(data);          
            closePage();
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("修改失败");
        }
    })
}

//关闭当前页面，返回上一级页面
function closePage(){
	window.history.back();  //返回上一页
	window.close();	
}

//格式化时间yyyy-mm-dd
function myformatter(date){  
    var strDate = date.getFullYear()+"-";
    strDate += date.getMonth()+1+"-";
    strDate += date.getDate();
    return strDate ;
}
