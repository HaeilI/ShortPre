$(document).ready(function(){
	//첫화면
	$("#home").click(function(){
		$(this).fadeOut(100);
	});
	setTimeout(function(){
		$("#home").fadeOut(200);
	},1000);
	
	
	$("#days button").click(function(){
		let y = $(this).index();
		console.log(y);
		$(this).removeClass("active").siblings().addClass("active");	
		$("#dramatable>div").eq(y-1).removeClass("active").siblings().addClass("active");
	});
	
	$("#dramabut").click(function(){
		$("#drama").css("display","block");
		$("#movie").css("display","none");
	});
	
	$("#moviebut").click(function(){
		$("#movie").css("display","block");
		$("#drama").css("display","none");
	});
	
	/*카테고리*/
	$("#category").click(function(){
		$("body").addClass("hidden");
		$("#navi").css("display","block");
	});
	
	$("#navi li,span").click(function(){
		$("body").removeClass("hidden");
		$("#navi").css("display","none");
	});
	
	$("#dramatable button,#movietable button").click(function(){
		$(this).toggleClass("red");
	});
	
	/*업로드*/
	$("#upbut").click(function(){
		$("#upload").animate({height:"150px"});
		$("#gb").fadeIn();
	});
	
	$("#upload").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#gb").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	/*$("#gu rt").click(function(){
		$(this).css("color","red");
		if( $(this).hasClass("add") ){ 
			$(".add").hide();
			$(".favorite").show();
			console.log("add");
			}
			
		if( $(this).hasClass("favorite") ){ 
			$(".favorite").hide();
			$(".add").show();
			}	 
	});*/
	$("#gu b").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
});//전체끝