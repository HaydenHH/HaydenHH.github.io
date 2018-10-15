// hhy client-side javascript
window.onload = function(){
	// alert("1")
	

	$(".recent-post-item").hover(function() {
		$(this).css('background','#F2F3F3')
		$(".recent-post-title").hover(function() {
		var thisBoColor = $(this).parent('.recent-post-info').parent('.recent-post-item').css('borderColor');
		console.log(thisBoColor)	
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

	var cat = $(".recent-post-cat a")
	cat.each(function(){
		console.log(this.text)
		var aClass = 'cat-' + this.text;
		$(this).parent().parent().parent().addClass(aClass)
	})
	
	var tag = $(".article-tags a")
	tag.each(function(i=0){
		i++
		console.log(this.text)
		var ran = Math.round(Math.random()*20) + 50
		$(this).css({
			'backgroundColor' : 'hsl(' +  ran * i + ',82%,42%)'
		})
	})

	var catList = $("aside .category-list");
	catList.addClass('list-group')
	catList.find('li').addClass('list-group-item d-flex justify-content-between align-items-center')
	catList.find('li').find('span').addClass('badge badge-warning badge-pill')

	var tagList = $("aside .tag-list");
	tagList.addClass('list-group')
	tagList.find('li').addClass('list-group-item d-flex justify-content-between align-items-center')
	tagList.find('li').find('span').addClass('badge badge-warning badge-pill')



	var archiveList = $("aside .archive-list");
	archiveList.addClass('list-group')
	archiveList.find('li').addClass('list-group-item d-flex justify-content-between align-items-center')
	archiveList.find('li').find('span').addClass('badge badge-warning badge-pill')



$("#picCar .carousel-item:eq(0)").addClass('active')










}