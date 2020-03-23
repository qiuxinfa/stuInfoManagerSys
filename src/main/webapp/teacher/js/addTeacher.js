
//新增老师信息
function addTeacher(){
	var id = $("#id").val();
	var name = $("#name").val();
	var title = $("#title").val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/addTeacher",
        data: {"id":id,"name":name,"title":title},
        dataType: "json",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!name){
				alert("姓名必填!");
				$("#name").focus();//获取焦点
				return false;
			}
			if(!title){
				alert("职称必填!");
				$("#title").focus();//获取焦点
				return false;
			}
        },
        success: function (data) {
            alert(data);
            window.location.href="/stuInfoManagerSys/teacher/jsp/showTeacher.jsp";
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

