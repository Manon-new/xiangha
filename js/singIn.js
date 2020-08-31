var singin = $(".singin"),
	back = $(".back"),
	hideTog = $(".hideTog"),
	have = $(".have"),
	subBtn = $(".sub"),
	tel = $("[placeholder='手机号/邮箱']"),
	pwd = $("[placeholder='密码']"),
	// pwd2 = $("[placeholder='确认密码']"),
	form = $("form"),
	f_span = $(".f_span"),
	UserName = tel.val(),
	Pwd = pwd.val();
// pwd2.css("display","none")

singin.on("click",function(){
	if(back.text() === "欢迎回来,登录"){
		back.text("注册账号")
		have.text("已有香哈账号？")
		singin.text("登录")
		subBtn.val("注册")
		f_span.text("")
	} else {
		back.text("欢迎回来,登录")
		have.text("没有香哈账号？")
		singin.text("注册")
		subBtn.val("登录")
	}
})
subBtn.on("click",function(){
			UserName = tel.val()
			Pwd = pwd.val()
	if(back.text() === "欢迎回来,登录"){
		if(tel.val() && pwd.val()){
			var a=localStorage.getItem(UserName)
			if(!a){
				f_span.text("用户名或密码错误")
				console.log(1)
			}else{
				console.log(a)
				if(a === Pwd){
					form.submit()
				}else{
					f_span.text("用户名或密码错误")
				}
			}
			
		}else{
			f_span.text("手机号/邮箱和密码不能为空！")
			console.log(2)
		}
	} else{
		if(tel.val() && pwd.val()){
			localStorage.setItem(UserName,Pwd);
			history.go(0)
		}else{
			f_span.text("手机号/邮箱和密码不能为空！")
		}
	}
})








