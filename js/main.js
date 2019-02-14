// hhy client-side javascript
window.onload = function(){
	// alert("1")
	$(document).ready(function () {
		hljs.initHighlightingOnLoad();
	});


	let oriColor = $(".recent-post-item").css('backgroundColor')
	$(".recent-post-item").hover(function() {
		
		// $(this).css('backgroundColor', '#42484F')
		$(".recent-post-title").hover(function() {
		var thisBoColor = $(this).parent('.recent-post-info').parent('.recent-post-item').css('borderColor');
		console.log(thisBoColor)	
		$(this).parent('.recent-post-info').parent('.recent-post-item').css({
			'background':'#EDC329',
			'transition':'0.3s ease-out'
		})
		}, function() {
			$(this).parent('.recent-post-info').parent('.recent-post-item').css({
				'background':oriColor,
				'transition':'0.78s'
			})
		});
		}, function() {
			
			$(this).css('backgroundColor',oriColor)
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
		var ran = Math.round(Math.random()*100) 
		$(this).css({
			'backgroundColor' : 'hsl(' +  ran * i + ',92%,72%)'
		})
	})

	// $('.galleryBtn').click(function(event){
		
	// 	if($(this).text()== "close"){
	// 		$(this).text("open")
	// 	}else{
	// 		$(this).text("close")
	// 	}

	// 	let fa = $(this).parent('.post-gallery').find('.gallery-img-box')
	// 	fa.slideToggle()
		
		
		
	// })
	


// archieve

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

//-----------------

// archieve-article

	var tagItem = $(".tag-item");
	tagItem.addClass('list-group-item d-flex justify-content-between align-items-center')
	tagItem.find('span').addClass('badge badge-secondary')

	var catItem = $(".category-item");
	catItem.addClass('list-group-item d-flex justify-content-between align-items-center')
	catItem.find('span').addClass('badge badge-secondary')


	var archiItem = $(".archive-item");
	archiItem.addClass('list-group-item d-flex justify-content-between align-items-center')
	archiItem.find('span').addClass('badge badge-secondary')

//------------------

	$("#picCar .carousel-item:eq(0)").addClass('active')

//---


var parallax = new Parallax(document.getElementById('scene'));








}