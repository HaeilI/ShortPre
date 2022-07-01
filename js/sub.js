$(document).ready(function(){
	
	$("#top button").click(function(){
		$("#menu").animate({height:"150px"});
		$("#gb").fadeIn();
	});
	
	$("#menu").click(function(){
		$("#menu").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#upbut").click(function(){
		$("#upload").animate({height:"150px"});
		$("#gb").fadeIn();
	});
	
	$("#upload").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});	
	
	$("#gb").click(function(){
		$("#menu").animate({height:0});
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	
});