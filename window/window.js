
define(['jQuery','jQueryUI'],function($,$UI) {
	win={
		argus:{
			content:"welcome",
			title:'提示',
			config:{
				width:500,
				height:300,
				//x:,
				//y:,
			},
			callback:function(){}
		},
		alert:function(arguss){
			$(function(){
				$.extend(true,win.argus,arguss)
				$('<div class="bounceWindow"></div>').appendTo($('body'))
				var bw = win.argus.config.width,bh=win.argus.config.height
				var winw = $(window).width()
				var winh = $(window).height()
				var x=win.argus.config.x||0.5*(winw-bw)
				var y=win.argus.config.y||0.5*(winh-bh)
				$('.bounceWindow').css({
					width:bw+'px',
					height:bh+'px',
					position:'absolute',
					left:x+'px',
					top:y+'px',
				})
				$('<div class="header"></div>').appendTo($('.bounceWindow'))
				$('<div class="body"></div>').appendTo($('.bounceWindow'))
				$('<div class="controler"></div>').appendTo($('.bounceWindow'))
				$('.body').text(win.argus.content)
				$('.header').text(win.argus.title)
				$('<button class="con">确定</button>').appendTo($('.controler'))
				$('.con').on('click',function(){
					win.argus.callback&&win.argus.callback()
					$('.bounceWindow').remove()
				})
				$('.bounceWindow').draggable({handle:$('.header')})
			})
		},
		confirm:function(){},
		prompt:function(){},
	}
	return win
})