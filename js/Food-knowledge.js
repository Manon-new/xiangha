$(document).ready(function(){
	var upbtn = $(".upbtn"),
		downbtn = $(".downbtn"),
		active = $(".active"),
		pagebtn = $(".pagebtn")
		hideup = function(){
					active = $(".active")
					if($(active.children()[0]).text() == 1){
						upbtn.css("visibility","hidden")
					} else{
						upbtn.css("visibility","visible")
					}			
					console.log($(active.children()[0]))
		};
		hideup()
	pagebtn.on("click",function(){
		$(this).parent().parent().children().removeClass("active")
		$(this).parent().toggleClass("active")
		hideup()
	})
})