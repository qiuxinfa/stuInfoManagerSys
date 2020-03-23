//页面加载时执行
$(function(){
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
        	
});

//根据id新增学生信息
function addStudent(){
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
        url: "/stuInfoManagerSys/addStudent",
        data: {"id":id,"name":name,"sex":sex,"age":age,"clazzId":clazzId,"phone":phone,"majorId":majorId,"instituteId":instituteId},
        dataType: "json",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!clazzId || clazzId==-1){
				alert("班级必选!");
				return false;
			}
			if(!name){
				alert("姓名必填!");
				$("#name").focus();//获取焦点
				return false;
			}
			if(!majorId || majorId==-1){
				alert("专业必选!");
				return false;
			}
			if(!phone){
				alert("电话必填!");
				$("#phone").focus();//获取焦点
				return false;
			}
			if(!instituteId || instituteId==-1){
				alert("学院必选!");
				return false;
			}
			if(!age){
				alert("年龄必填!");
				$("#age").focus();//获取焦点
				return false;
			}
			if(!sex){
				alert("性别必选!");
				return false;
			}
        },
        success: function (data) {
            alert(data);
            window.location.href="/stuInfoManagerSys/student/jsp/showStudent.jsp";
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

