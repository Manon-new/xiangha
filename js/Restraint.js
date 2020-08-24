$(function(){
	var i=0;
	$(".col-xs-1").on("mouseenter","img",function(){
		$(this).css("display","none")
		$(this).next().css("display","inline")
	})
	$("span").on("mouseout",function(){
		console.log(++i)
		
	})
})