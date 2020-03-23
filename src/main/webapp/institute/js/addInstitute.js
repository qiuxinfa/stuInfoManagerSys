
//新增学院信息
function addInstitute(){
	var id = $("#id").val();
	var name = $("#name").val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/addInstitute",
        data: {"id":id,"name":name},
        dataType: "json",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!name){
				alert("学院名必填!");
				$("#name").focus();//获取焦点
				return false;
			}
        },
        success: function (data) {
            alert(data);
            window.location.href="/stuInfoManagerSys/institute/jsp/showInstitute.jsp";
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

