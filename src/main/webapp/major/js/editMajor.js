//页面加载时执行
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
        
        var a=GetRequest();
        console.log("id:"+a['id']); //打印出传过来的id
        var id=a['id'];
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findMajorById",
                   data: {"id":id},
                   dataType: "json",
                   success: function (major) {
                	  $("#name").val(major.name);
                	  $("#id").val(major.id);
                	  $("#selectInstitute").val(major.instituteId);              	 
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

//根据id更新专业信息
function updateMajor(){
	var id = $("#id").val();
	var name = $("#name").val();
	var instituteId = $('#selectInstitute option:selected').val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/updateMajor",
        data: {"id":id,"name":name,"instituteId":instituteId},
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