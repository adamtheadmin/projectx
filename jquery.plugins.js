$.detectCollide = [];

$.detection = function(){

	this.interval = setInterval(function(){
		$.each($.detectCollide, function(NUHxD, $job){
			$($job.selector).collision($job.match).each(function(){
				$job.callback.apply(this);
			})
		})
	}, 150)

	this.stop = function(){
		clearInterval(this.interval);
	}
} 

$.fn.onCollide = function($match, $callback){
	$.detectCollide.push({
		selector : this.selector,
		match : $match,
		callback : $callback
	})
}

$.hookReserve = {};

$.hook = function($name, $fct){
	switch(typeof $fct){
		case "function":
			$.hookReserve[$name] = [$fct];
		break;

		default:
			if($name in $.hookReserve)
				$.each($.hookReserve[$name], function(NUHxD, $cbf){
					$cbf($fct);
				})
		break;
	}
}

$.banner = function($text, $callback){
	return $('.banner').text($text).animate({
		top : 0
	}, 1000, function(){
		setTimeout(function(){
			$('.banner').animate({
				top : -113
			})
			if(typeof $callback == 'function')
				$callback();
		}, 3500)
	})
}

$.hook('gameStart', function(){
	$.banner('GAME START');
})

$(function(){
	$.banner('WELCOME TO PROJECT X')
})