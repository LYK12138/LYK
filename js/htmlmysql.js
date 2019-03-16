$('.top_TableBox_left').hover(function() {
	$('.top_TableBox_left>ul').show();
}, function() {
	$('.top_TableBox_left>ul').hide();
});


$('.nav_area ul li').hover(function() {
	$(this).children('div').toggle();
	/*$(this).children('span').children('img').animate({'transform': 'rotate(180deg)'}, 2000)*/
	/*$(this).children('span').children('img').css('transform','rotate(180deg)');*/
}, function() {
	$(this).children('div').toggle()
	/*$(this).children('span').children('img').css('transform','rotate(0deg)');*/
/*	$(this).children('span').children('img').animate({'transform': 'rotate(0deg)'}, 2000)*/
});

function go(a){
	var n=a+1;
	$('.top_TableBox_left>ul>li').eq(a).hover(function() {
		$(this).children().children().children('img').attr('src', '../images/1e_'+n+'.png');
		$(this).children('div').css('display', 'inline');
	},function() {
		$(this).children().children().children('img').attr('src', '../images/1c_'+n+'.png');
		$(this).children('div').css('display', 'none');
	});
}
/*下拉选框*/
for (var i = 0; i < 11; i++) {
	go(i);
}
