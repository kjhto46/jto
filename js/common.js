var gnbMenu = $('#gnb .maingnb > a');  //주메뉴

	   gnbMenu.on('mouseenter focus',function(){
	     $('#gnb .gnbbox').hide();//기존서브메뉴 감추기
         $(this).next().slideDown(300);
		 //easing기본기능:swing처리포함 
	   }); 
	   //on() - 이벤트를 감지한다 여러개이벤트 처리시
       $('#gnb').mouseleave(function(){
	     $('#gnb .gnbbox').hide();
	   });


	   $(function(){
		var gnbA = $('#gnb>li>a');  //주메뉴
 
		gnbA.on('mouseenter focus',function(){
		  $('#gnb>li>ul').hide();//기존서브메뉴 감추기
		  $(this).next().slideDown(300);
		  //easing기본기능:swing처리포함 
		}); 
		//on() - 이벤트를 감지한다 여러개이벤트 처리시
		$('#gnb').mouseleave(function(){
		  $('#gnb>li>ul').hide();
		});
 
	 });
 
	 
	 $(function(){
		//변수선언
		var listA = $('#listNum > a');
		var pic = $('#banner').find('li');
		var index=0;
		var playOn = false;
		var roll;
		pic.hide();
	   
		//자동스크롤
		function play(){
		  if(!playOn){
		   playOn = true;
		   roll = setInterval(function(){$('.right').click();},2500);
		  }
		}
		function stop(){
		  if(playOn){
		   playOn =false;
		   clearInterval(roll);
		  }
		}
		 
		//버튼클릭 전환
		listA.click(function(){
		 stop();
		 index = $(this).index();//0~3
		 pic.hide();
		 pic.eq(index).show();
									
		 listA.find('img').each(function(){
		  $(this).attr('src',$(this).attr('src').replace('on','off'));
		 });
		 $(this).find('img').attr('src',$(this).find('img')
		 .attr('src').replace('off','on'));
		 
		 play();
		 return false;
		}); //listA.click() end
 
		//왼쪽버튼클릭
		$('.left').click(function(){
		 index--;
		 if(index < 0)
		 {
		  index =listA.length-1;
		 }
		 listA.eq(index).click();
		 return false;
		}); 
		
		//오른쪽버튼클릭
		$('.right').click(function(){
		 index++;
		 if(index > listA.length-1)
		 {
		  index = 0;
		 }
		 listA.eq(index).click();
		 return false;
		});
 
		//play()
		$('.play').click(function(){
		  play();
		  return false;
		});
 
		//stop()
		 $('.stop').click(function(){
		  stop();
		  return false;
		});
 
		//시작하기
		listA.eq(index).click();
	  });

//tab
			
$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');//tab-1,2,3,4,5

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#'+tab_id).addClass('current');
});