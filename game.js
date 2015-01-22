var gui = require('nw.gui');
gui.Window.get().setMaximumSize(0, screen.availHeight);

var process = {
	exit : function(){
		gui.App.quit();
	}
}
//bg offset
$.bgLeft = function(){
	$(".background").animate({
		margin : "-300px -980px",
		opacity : 0.7
	}, 50000, function(){
		$.bgRight();
	})
}

$.bgRight = function(){
	$(".background").animate({
		margin : "-300px 0",
		opacity : 1
	}, 50000, function(){
		$.bgLeft();
	})
}

$.prepare = function($on, $done){
	setTimeout($done, 1200);
	$.gameOn = !!$on;
	if($on){
		$(".menu > h1").animate({
			color : '#F55'
		}, 850, function(){
			$(".background").stop();
			$('.menu').animate({
				left : '-400px'
			}, 1200)
			$('.titlebar').animate({
				top : '-150px'
			}, 750)
			$('body').css({
				cursor : 'none'
			})

			$.craft = new ship();

			$.craft.ready(function(){
				$.craft.destroy();
			})
			
		})
		
	} else {
		$(".menu > h1").css({color : '#FFF'})
		$(".start").prop('disabled', false);
		$('.field *').hide(1000, function(){
			$(this).remove();
		})
		$.bgLeft();
		$('.menu').animate({
			left : '50%'
		}, 1200);

		$('.titlebar').animate({
			top : '0px'
		}, 750)

		$('body').css({
			cursor : 'default'
		})

		if('craft' in $)
			$.craft.destroy()
	}
}
$(function(){
	$.prepare(0)

	$.bgLeft();

	$(".titlebar").hover(function(){
		$(this).animate({
			'backgroundColor': 'rgba(137, 14, 124, .5)',
			'color' : '#F55'
		}, 550);
	}, function(){
		$(this).animate({
			'backgroundColor': 'rgba(0, 0, 0, .7)',
			'color' : '#FFF'
		}, 550);
	})

	$(".start").click(function(){
		$(this).prop('disabled', true);
		$.prepare(1, function(){
			setTimeout(function(){
				$.prepare(0);
			}, 7000)
		});
	})

	$('.x').click(function(){
		process.exit();
	})
})