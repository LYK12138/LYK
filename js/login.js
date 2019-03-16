/*
* @Author: hp
* @Date:   2019-03-04 19:21:48
* @Last Modified by:   hp
* @Last Modified time: 2019-03-05 09:58:57
*/

'use strict';

var a=document.getElementById('top_input');
a.onfocus=function(e){
    // e.stopPropagation();
    a.parentNode.style.border="1px solid #2f85eb";
}
a.onblur=function(e){
    a.parentNode.style.border="1px solid #d5d5d5";
}
middle_input.onfocus=function(e){
    // e.stopPropagation();
    middle_input.parentNode.style.border="1px solid #2f85eb";
}
middle_input.onblur=function(e){
    middle_input.parentNode.style.border="1px solid #d5d5d5";
}


$('#lyk-dl-phone').click(function(){
	$('#r2').css('display', 'block');
	$('#r2_2').css('display', 'none');
	$('#lyk-dl-phone').children('p').css('color','red');
	$('#lyk-dl-email').children('p').css('color','black')
})

$('#lyk-dl-email').click(function(){
	$('#r2').css('display', 'none');
	$('#r2_2').css('display', 'block');
	$(this).children('p').css('color','red')
	$('#lyk-dl-phone').children('p').css('color','black');
})