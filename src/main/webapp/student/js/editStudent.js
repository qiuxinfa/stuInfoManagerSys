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

        //专业下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findMajorList",
            dataType: "json",
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
        
        //班级下拉列表
        $.ajax({
            type: "post",
            url: "/stuInfoManagerSys/findClazzList",
            dataType: "json",
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
    	
        var a=GetRequest();
        console.log("id:"+a['id']); //打印出传过来的id
        var id=a['id'];
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findStudentById",
                   data: {"id":id},
                   dataType: "json",
                   success: function (student) {
                	  $("#selectClazz").val(student.clazzId);
                	  $("#selectMajor").val(student.majorId);
                	  $("#selectInstitute").val(student.instituteId);
                	  $("#name").val(student.name);
                	  $("#id").val(student.id);
                	  $("#age").val(student.age);
                	  $("#phone").val(student.phone);
                	  if(student.sex==2){
                		  $("input[name=sex]:first").attr("checked","");
                		  $("input[name=sex]:last").attr("checked","checked");
                	  }
                	 
                	 
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

//根据id更新学生信息
function updateStudent(){
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
        url: "/stuInfoManagerSys/updateStudent",
        data: {"id":id,"name":name,"sex":sex,"age":age,"clazzId":clazzId,"phone":phone,"majorId":majorId,"instituteId":instituteId},
        dataType: "json",
        success: function (data) {
            alert(data);
            closePage();
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("删除失败");
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
