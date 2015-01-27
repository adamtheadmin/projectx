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