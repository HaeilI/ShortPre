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
	
	/*���â*/
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
	
	
	
	//������ ��ũ�ѹٳ��̸� 0���� ����
	$(document).scrollTop(0);
	//�� ������ ���̸� ������ �Ҵ�.
	const s0 = $(".sec").eq(0).offset().top; //���밪(���������� ����)=> 0
	const s1 = $(".sec").eq(1).offset().top; //100vh   937
	const s2 = $(".sec").eq(2).offset().top; //200vh   1874
	const s3 = $(".sec").eq(3).offset().top; //���밪(���������� ����)=> 0
	const s4 = $(".sec").eq(4).offset().top; //100vh   937
	const s5 = $(".sec").eq(5).offset().top;
	console.log(s2); //��) 1874 
	 //500vh
		
	let st = 0;			
	let last = 0;
	
	$(window).scroll(function(){
	
				//��ũ�ѳ�����, ��ũ������ top���� st������ �Ҵ���.
				st = $(this).scrollTop(); //��) 150
				
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
						//console.log("���� �ø�");	
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
				//��ũ�� ���������� top��   �������� ��ũ�� top�� �� �Ѱ���
				last = st;				
	});//scroll()��
			
	let p= 0 ;
	function move(i){
				switch(i){
					case 0: p = s0;
							break;
					case 1: p = s1; //��) p=937
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
	}//move()��			
	
});//��ü��