$(document).ready(function(){
	
		$("#share").click(function(){
		$("#menubar1").animate({height:"85vh"});
		$("#gb").fadeIn();
	});
	
	$("#menubar1").click(function(){
		$("#menubar1").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#gb").click(function(){
		$("#menubar1").animate({height:0});
		$("#menubar2").animate({height:0});
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});
	
	
	$("#more").click(function(){
		$("#menubar2").animate({height:"200px"});
		$("#gb").fadeIn();
	});
	
	$("#about").click(function(){
		$("#menubar2").animate({height:0});
		$("#gb").fadeOut();
	});
	
	$("#fa").click(function(){
		$(this).toggleClass("red");
	});
	
	$("#dramabut").click(function(){
		$("#dramashort").css("display","block");
		$("#movieshort").css("display","none");
	});
	
	$("#moviebut").click(function(){
		$("#movieshort").css("display","block");
		$("#dramashort").css("display","none");
	});
	
	/*댓글창*/
	$("#comm").click(function(){
		$("body").addClass("hidden");
		$("#comment").css("display","block");
	});
	
	$("#close").click(function(){
		$("body").removeClass("hidden");
		$("#comment").css("display","none");
	});
	
	$("#upbut").click(function(){
		$("#upload").animate({height:"150px"});
		$("#gb").fadeIn();
	});
	
	$("#upload").click(function(){
		$("#upload").animate({height:0});
		$("#gb").fadeOut();
	});	
	
	
	
	//문서의 스크롤바높이를 0으로 설정
	$(document).scrollTop(0);
	//각 섹션의 높이를 변수에 할당.
	const s0 = $(".sec").eq(0).offset().top; //절대값(브라우저기준 측정)=> 0
	const s1 = $(".sec").eq(1).offset().top; //100vh   937
	const s2 = $(".sec").eq(2).offset().top; //200vh   1874
	const s3 = $(".sec").eq(3).offset().top; //절대값(브라우저기준 측정)=> 0
	const s4 = $(".sec").eq(4).offset().top; //100vh   937
	const s5 = $(".sec").eq(5).offset().top;
	console.log(s2); //예) 1874 
	 //500vh
		
	let st = 0;			
	let last = 0;
	
	$(window).scroll(function(){
	
				//스크롤내리면, 스크롤윗쪽 top값을 st변수에 할당함.
				st = $(this).scrollTop(); //예) 150
				
				if (st > last){
							   
								 //(150<937)
					   if (st < s1){							
							move(1);
					   }
					   if( st > s1 && st < s2 ){
							move(2);							
					   }
						if( st>s2 && st<s3 ){
							move(3);							
						}
						if( st>s3 && st<s4 ){
							move(4);							
						}
						if( st>s4 && st<s5 ){
							move(5);							
						}
				} 
				if (st < last){	
						//console.log("위로 올림");	
						if(st<s5 && st>s4){							
							move(4);
						}
						if(st<s4 && st>s3){							
							move(3);
						}
						if(st<s3 && st>s2){							
							move(2);
						}
						if(st<s2 && st>s1){							
							move(1);
						}
						if(st<s1 ){							
							move(0);
						}
				}
				//스크롤 내렸을때의 top을   마지막의 스크롤 top에 값 넘겨줌
				last = st;				
	});//scroll()끝
			
	let p= 0 ;
	function move(i){
				switch(i){
					case 0: p = s0;
							break;
					case 1: p = s1; //예) p=937
							break;
					case 2: p = s2;
							break;
					case 3: p = s3;
							break;
					case 4: p = s4;
							break;
					case 5: p = s5;
				}
				$("html,body").stop().animate({scrollTop:p},50);
	}//move()끝			
	
});//전체끝