(function(){
	wave = function(w, cbf){
		cbf = cbf || function(){};
		var series = [];
		for(var x = 5 + w * 2;x; x--)
			series.push(w);

		async.eachSeries(series, function(num, next){
			for(;num;num--){
				var m = new monster(1);
				m.onDeath.push(next);
			}
		}, cbf)
	}
})();

$.detectCollide = [];

$.detection = function(){

	this.start = function(){
		this.interval = setInterval(function(){
			$.each($.detectCollide, function(NUHxD, $job){
				$($job.selector).collision($job.match).each(function(){
					$job.callback.apply(this);
				})
			})
		}, 150)
	}

	this.stop = function(){
		clearInterval(this.interval);
	}

	this.start();
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

$.shuffle = function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}