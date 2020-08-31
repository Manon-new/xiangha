var singin = $(".singin"),
	back = $(".back"),
	hideTog = $(".hideTog"),
	have = $(".have"),
	subBtn = $("[value='登录']"),
	tel = $("[placeholder='手机号/邮箱']"),
	pwd = $("[type='password']"),
	form = $("form"),
	f_span = $(".f_span")
singin.on("click",function(){
	if(back.text() === "欢迎回来,登录"){
		back.text("注册账号")
		hideTog.css("display","none")
		have.text("已有香哈账号？")
	} else {
		back.text("欢迎回来,登录")
		hideTog.css("display","block")
		have.text("没有香哈账号？")
	}
})
subBtn.on("click",function(){
	if(tel.val() && pwd.val()){
		form.submit()
	}else{
		f_span.text("手机号/邮箱和密码不能为空！")
	}
})
