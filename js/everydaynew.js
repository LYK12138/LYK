/*
* @Author: 77235
* @Date:   2019-02-14 13:53:01
* @Last Modified by:   77235
* @Last Modified time: 2019-02-15 01:14:48
*/

'use strict';
$('.change').mouseenter(function(event){
			$(this).css({'background':'white','color':'#ff1e32'});
			$(this).children('.erji').css('display','block');
			$(this).siblings().children('.erji').css('display','none');
			})
$('.change').mouseleave(function(event){
			$(this).css({'background':'black','color':'#999'});
			$('.erji').css('display','none');
			// $(this).siblings().children('p').css('display','none')
})


/*$('.l4').mouseenter(function(event){
				$(this).children('.little').css('display','block');
				$(this).siblings().children('.little').css('display','none')
			})
$('.l4').mouseleave(function(event){
				$('.little').css('display','none');
				// $(this).siblings().children('p').css('display','none')
			})*/

$('li').click(function(event){
	$(this).children('.nav_1').css('display','block');
	$(this).children('h3').children('b').children('img').css('transform','rotate(90deg)');
	$(this).siblings().children('.nav_1').css('display','none');
	$(this).siblings().children('h3').children('b').children('img').css('transform','rotate(0deg)');
})




$('.red').mouseenter(function(event){
			/*$(this).css({'background':'white','color':'#ff1e32'});*/
			/*$(this).css('height','41px');*/
			$(this).children('.SJB').children('.zhangkai').children('.SJB2').css('display','none');
			$(this).children('.SJB').css('display','block');
			/*$('SJB').css('display','block');*/
			/*$(this).siblings().children('.erji').css('display','none');*/
})
$('.red').mouseleave(function(event){
			/*$(this).css({'background':'black','color':'#999'});*/
			$(this).css('height','40px');
			$('.SJB').css('display','none');
			/*$('SJB').css('display','none');*/
			// $(this).siblings().children('p').css('display','none')
})




$('.zhangkai').mouseenter(function(event){
			/*$(this).css({'background':'white','color':'#ff1e32'});*/
			/*$(this).css('height','41px');*/
			$(this).children('.SJB2').css('display','block');
			/*$('SJB').css('display','block');*/
			/*$(this).siblings().children('.erji').css('display','none');*/
})
$('.zhangkai').mouseleave(function(event){
			/*$(this).css({'background':'black','color':'#999'});*/
			/*$(this).css('height','40px');*/
			$(this).children('.SJB2').css('display','none');
			/*$('SJB').css('display','none');*/
			// $(this).siblings().children('p').css('display','none')
})



$('.yiru').mouseenter(function(event){
			/*$(this).css({'background':'white','color':'#ff1e32'});*/
			/*$(this).css('height','41px');*/
			$(this).children('.l11h5').css('color','#d22046');
			$(this).children('p').css('color','#d22046');
			/*$('SJB').css('display','block');*/
			/*$(this).siblings().children('.erji').css('display','none');*/
})
$('.yiru').mouseleave(function(event){
			/*$(this).css({'background':'black','color':'#999'});*/
			/*$(this).css('height','40px');*/
			$(this).children('.l11h5').css('color','black');
			$(this).children('.l11p').css('color','#999');
			/*$('SJB').css('display','none');*/
			// $(this).siblings().children('p').css('display','none')
})

$('.yiru').click(function(event){
	$(this).css('background','#d22046');
	$(this).children('h5').css('color','white');
	$(this).children('p').css('color','white');
	$(this).children('p').children('i').css('color','white');
	$(this).siblings().css('background','#fff');
	$(this).siblings().children('h5').css('color','black');
})