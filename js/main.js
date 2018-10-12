// hhy client-side javascript
window.onload = function(){
	// alert("1")
	

	$(".recent-post-item").hover(function() {
		$(this).css('background','#F2F3F3')
		$(".recent-post-title").hover(function() {
		$(this).parent('.recent-post-info').parent('.recent-post-item').css({
			'background':'#EDC329',
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
	
	
	// var revImgB = $('.recent-post-img');
	// var revImg = $('.recent-post-img img');
	// revImgB.mousemove(function(e) { 
      
 //          var target = e.target || e.srcElement,
 //          rect = target.getBoundingClientRect(),
 //          btWidth = rect.right - rect.left,
 //          btHeight = rect.top - rect.bottom,
 //          offsetX = e.clientX -  rect.left,
 //          offsetY = e.clientY - rect.top;
          
 //          var cenX = btWidth / 2,
 //            cenY = btHeight / 2;
            
 //          var goX = [cenX - offsetX] ,
 //            goY = [cenY - offsetY]  ;
 
 //          console.log(goX,goY)
 //          $('.recent-post-img img').css({
 //          	'transform': 'translateY(' + -goY + ')'
 //          })
 //      })  




}