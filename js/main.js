// hhy client-side javascript
window.onload = function(){
	// hljs.initHighlightingOnLoad();
	let bgcImg = []
	for(let i=0;i<13;i++){
		let src = `../img/g/bg${i}.svg`
		bgcImg.push(src)
	}
	let rNF = (x)=> {
		return Math.floor(Math.random()*x)
	}
	
		
		
		
	

	let oriColor = $(".recent-post-item").css('backgroundColor')
	$(".recent-post-item").hover(function() {
		
		// $(this).css('backgroundColor', '#42484F')
		$(".recent-post-title").hover(function() {
		var thisBoColor = $(this).parent('.recent-post-info').parent('.recent-post-item').css('borderColor');
		// console.log(thisBoColor)	
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

	$('.recent-post-item').each(function(){
		
		let h = $(this).find('.post-summary').css('height')
		$(this).find('.recent-post-placeholder').css('height',h) 
	})

	$('.recent-post-item:eq(0)').find('.recent-post-title h1').append(`<span class="badge badge-warning mx-1">New</span>`)
	// $('.post-list-item:eq(0)').append(`<span class="badge badge-secondary mx-1">New</span>`)
	$('.post-reflection-li:eq(0)').remove()
	

	var cat = $(".recent-post-cat a")
	cat.each(function(){
		// console.log(this.text)
		var aClass = 'cat-' + this.text;
		$(this).parent().parent().parent().addClass(aClass)
	})
	
	var tag = $(".article-tags a")
	tag.each(function(i=0){
		i++
		
		let ran = Math.round(Math.random()*100) 
		$(this).css({
			'backgroundColor' : 'hsl(' +  ran * i + ',92%,72%)'
		})
	})

	$('.post-research-tags').each(function(i=0){
		i++
		let ran = Math.round(Math.random()*100) 
		$(this).css({
			'backgroundColor' : 'hsl(' +  ran + 5 * i + ',20%,50%)' 
		})
	})


	$('.gallery-img-a').click(function(t){
		
		 let allImg = Array.from(t.target.parentElement.parentElement.querySelectorAll('.gallery-img-a'))
		 let srcArr = []
		 allImg.forEach(function(n){
			srcArr.push(n.querySelector('img').getAttribute('src')) 
		 })
		
		
		let link = $(this).find('img').attr('src')
		
		let nowIndex = srcArr.indexOf(link)

		$('body').append(`
		  <div class="gallery-img-show position-fixed col-sm pt-3"  oncontextmenu="return false;" onselectstart="return false">
				
			<div class="row p-0 offset-md-2">
				<div class="gallery-btn col-sm col-md-1 offset-md-2 m-1">X</div>
				<div id="arrowL" class="gallery-arrow col-sm col-md-1 m-1 d-flex-inline">←</div>
				<div id="arrowR" class="gallery-arrow col-sm col-md-1 m-1 d-flex-inline">→</div>  		
			</div>
			<img src="${link}" class="img-thumbnail gallery-img offset-md-2 ">
			
		  </div>
		`)

		$('.gallery-arrow').click(function(t){
			if($(this).attr('id') == 'arrowL'){
				nowIndex -= 1
			}else{
				nowIndex ++
			}
			while (nowIndex < 0) nowIndex += srcArr.length
			while (nowIndex > srcArr.length) nowIndex -= srcArr.length
			$('.gallery-img').attr('src',srcArr[nowIndex])
		})

		$('.gallery-btn').click(function(){
		
			$('.gallery-img-show').remove()
		})
	})
	
// post 



	let strongWord = $('#post-container #post strong')
	const appid = '20190105000254845';
	const key = 'U0V67jcwJv9A0sPrByhj';
	const salt = (new Date).getTime();
	// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
	
	
	

	strongWord.each(function () {
		var result = /[^\u4e00-\u9fa5]/.test(this.innerHTML)
		let copy = this.innerHTML
		$(this).innerHTML == null
		let from,to
		if(result == false){
			from = 'zh'
			to = 'en'
		}else{
			from = 'en'
			to = 'zh'
		}
		let all = copy
		let transl 
		let str1 = appid + all + salt + key;
		let sign = MD5(str1);
		let target = $(this)
		$.ajax({
			url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
			type: 'get',
			dataType: 'jsonp',
			data: {
				q: copy,
				appid: appid,
				salt: salt,
				from: from,
				to: to,
				sign: sign
			},
			success: function (data) {
				transl = data.trans_result[0].dst
				target.replaceWith($('<strong><ruby>' + copy + `<rt>${transl}</rt>` + '</ruby></strong>'));
			}
		});	
		
	  })



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


// var parallax = new Parallax(document.getElementById('scene'));








}