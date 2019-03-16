var a=$('.sql_img').offset().top
$('.bigTP').mousemove(function(e){
	if(e.pageY<641&&e.pageX<513&&e.pageX>=152&&e.pageY>=330){
		setTimeout(function(){
			$('.sql2').css({'background-position-x':-(e.pageX-a+150)*2+150,'background-position-y':-(e.pageY+150)*2+210})
		},3)
		
	}
	
	
})
$('.bigTP').hover(function() {

	$('.sql2').show();
}, function() {
	$('.sql2').hide();
});
