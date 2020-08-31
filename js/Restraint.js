var food = {"foodlist":["./img/restraint/apple.jpg",
			"./img/restraint/didiwei.jpg",
			"./img/restraint/digua.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/yangtao.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/yangtao.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/ganlan.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/ganlan.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/ganlan.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/yangtao.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg",
			"./img/restraint/ganzhe.jpg",
			"./img/restraint/guiyuan.jpg",
			"./img/restraint/apple.jpg"]
		}
var container = $(".container"),
	body = $("body");
	
$(function(){
	var i=0,arr=["#ff0","#f0f","#0ff","#00f","#0f0","#f00","#e5d","#a33","#33a","#3a3","sliver"],
		j=Math.floor(Math.random());
// 随机排序插入图片
	var foodlist = food.foodlist
	foodlist.sort(function(a,b){
		return 0.5 - Math.random()
	});
	console.log(foodlist)
	for(var i in foodlist){
		$($(".col-xs-1").children()[i]).removeAttr("src", foodlist[i])
		$($(".col-xs-1").children()[i]).attr("src", foodlist[i]) 
		console.log($(".col-xs-1").children())
	}
	
	$(".col-xs-1").on("mouseenter","img",function(){
		j=Math.floor(Math.random()*11)
		$(this).css("display","none")
		$(this).next().css({
			"display":"block",
			"width":"79px",
			"height":"79px",
			"font-size":"20px",
			"line-height":"79px",
			"text-align":"center",
			"background-color":arr[j]
		})
	})
	$(".col-xs-1 span").on("mouseout",function(){
		$(this).css("display","none")
		$(this).prev().css({"display":"block"})
	})
	// 模态框
	
})