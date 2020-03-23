
//用户注册，成功后跳转到登录页面
function userRegister(){
	var username = $("#username").val();
	var password = $("#password").val();
	var userType = $('input:radio[name="userType"]:checked').val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/register",
        data: {"username":username,"password":password,"userType":userType},
        dataType: "text",
        //提交前进行数据校验
        beforeSend: function (XHR) {
			if(!username){
				alert("用户名必填!");
				$("#username").focus();//获取焦点
				return false;
			}
			if(!password){
				alert("密码必填!");
				$("#password").focus();//获取焦点
				return false;
			}
			if(!userType){
				alert("用户类型必选!");
				return false;
			}
        },
        success: function (data) {
            if(data==1){
            	alert("注册成功，请登录");
                window.location.href="/stuInfoManagerSys/login.jsp";
            }else{
            	alert("注册失败");
            	window.location.href="/stuInfoManagerSys/register.jsp";
            }
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("注册失败");
            window.location.href="/stuInfoManagerSys/register.jsp";
        }
    })
}

