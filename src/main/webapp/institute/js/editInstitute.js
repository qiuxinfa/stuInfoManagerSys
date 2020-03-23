//页面加载时执行
    $(function () { 	    	
        var a=GetRequest();
        var id=a['id'];
        $.ajax({
                   type: "post",
                   url: "/stuInfoManagerSys/findInstituteById",
                   data: {"id":id},
                   dataType: "json",
                   success: function (institute) {
                	  $("#name").val(institute.name);
                	  $("#id").val(institute.id);             	 
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

//根据id更新学院信息
function updateInstitute(){
	var id = $("#id").val();
	var name = $("#name").val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/updateInstitute",
        data: {"id":id,"name":name},
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