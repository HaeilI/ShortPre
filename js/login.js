$(document).ready(function(){
	
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

});