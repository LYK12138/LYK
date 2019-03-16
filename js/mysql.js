$('.nav_area ul li').hover(function() {
	$(this).children('div').toggle()
}, function() {
	$(this).children('div').toggle()
});

function go(a){
	var n=a+1;
	$('.top_TableBox_left>ul>li').eq(a).hover(function() {
		$(this).children().children().children('img').attr('src', 'images/1e_'+n+'.png');
		$(this).children('div').css('display', 'inline');
	},function() {
		$(this).children().children().children('img').attr('src', 'images/1c_'+n+'.png');
		$(this).children('div').css('display', 'none');
	});
}
/*下拉选框*/
for (var i = 0; i < 11; i++) {
	go(i);
}
var x=0;
var time;
function slide(a){
	$('main').css('background', 'url("./images/l'+a+'.jpg") no-repeat  center');
	$('.main ol li').eq(a).addClass('current2');
	$('.main ol li').eq(a).siblings().removeClass('current2');
}
/*轮播图*/
function gogo(){
	time=setInterval(function(){
	x++;
	if(x>5){
		x=0;
	}
	slide(x);
},8000);
}
gogo();
/*轮播图滑入静止*/
$('.main').hover(function() {
	clearInterval(time);
	$('.main span').css('opacity', '1');
}, function() {
	gogo();
	$('.main span').css('opacity', '0');
	
});
/*点击滑动图标*/
$('.main ol li').click(function(event) {
	x=$(this).index();
	slide(x);
});
/*点击左边图标*/
$('.slide_left').click(function(event) {
	x--;
	if(x<0){
		x=5;
	}
	slide(x);
});
/*点击右边图标*/
$('.slide_right').click(function(event) {
	x++;
	if(x>5){
		x=0;
	}
	slide(x);
});
/*滑动页面头部出现界面*/
$(window).scroll(function(event) {
	var s=$(window).scrollTop();
	if(s>=$('.top_TableBox').offset().top){
		$('.side_top').show();
	}else{
		$('.side_top').hide();
	}
});
/*左侧边栏点击事件*/
$('.side_nav_left>li li').click(function(event) {
	var index=$(this).index();
	var top=$('.section_3').eq(index).offset().top;
	$('html,body').animate({'scrollTop':top})
});
$('.side_nav_left>li').eq(1).click(function(event) {
	var top=$('main').offset().top;
	$('html,body').animate({'scrollTop':top})
});
$('.side_nav_left>li').eq(2).click(function(event) {
	var top=$('section').offset().top;
	$('html,body').animate({'scrollTop':top})
});
/*左侧边滑动出现*/
$(window).scroll(function(event) {
	var s=$(window).scrollTop();
	if(s>=$('section').offset().top){
		$('.side_nav_left').css('position', 'fixed');
		$('.r_float').css('position', 'fixed');
	}else{
		$('.side_nav_left').css('position', 'absolute');
		$('.r_float').css('position', 'absolute');
	}
});



$("#toTop").click(function(){
   /* $('body,html').animate({scrollTop:0},4000);
    return false;*/
     document.documentElement.scrollTop = document.body.scrollTop = 0; 
 });