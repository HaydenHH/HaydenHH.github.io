// hhy client-side javascript
window.onload = function(){
	// alert("1")
	

	$(".recent-post-item").hover(function() {
		$(this).css('background','#F2F3F3')
		$(".recent-post-title").hover(function() {
		$(this).parent('.recent-post-info').parent('.recent-post-item').css({
			'background':'#ddd',
			'transition':'0.3s ease-out'
	})
		
	}, function() {
		$(this).parent('.recent-post-info').parent('.recent-post-item').css({
			'background':'#F2F3F3',
			'transition':'0.78s'
	})
	});
	}, function() {
		$(this).css('background','white')
	});
	
	
}