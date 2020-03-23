//用户登录
function userLogin(){
	var username = $("#username").val();
	var password = $("#password").val();
	var userType = $('input:radio[name="userType"]:checked').val();
    $.ajax({
        type: "post",
        url: "/stuInfoManagerSys/userLogin",
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
            	alert("登录成功");
                window.location.href="/stuInfoManagerSys/index.jsp";
            }else{
            	alert("用户名或密码错误，或者用户类型错误");
            	window.location.href="/stuInfoManagerSys/login.jsp";
            }
        },
        //null值不会被success回调函数捕获，因此可以通过error来实现该功能
        error: function () {
            alert("用户名或密码错误，或者用户类型错误");
            window.location.href="/stuInfoManagerSys/login.jsp";
        }
    })
}


//跳转到用户注册
function userRegister(){
	window.location.href="/stuInfoManagerSys/register.jsp";
}

