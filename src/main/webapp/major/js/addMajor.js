
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
})

//新增专业信息
function addMajor(){
	var id = $("#id").val();
	var name = $("#name").val();
	var instituteId = $('#selectInstitute option:selected').val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/addMajor",
        data: {"id":id,"name":name,"instituteId":instituteId},
        dataType: "json",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!name){
				alert("专业名必填!");
				$("#name").focus();//获取焦点
				return false;
			}
			if(!instituteId || instituteId=='-1'){
				alert("学院必选!");
				return false;
			}
        },
        success: function (data) {
            alert(data);
            window.location.href="/stuInfoManagerSys/major/jsp/showMajor.jsp";
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

