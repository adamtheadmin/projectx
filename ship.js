
function ship(){
	this.ship = $("<div class='ship' />").appendTo($(".field"));

	this.onReady = function(){};

	this.ready = function($fct){
		if(typeof $fct == 'function')
			this.onReady = $fct;
	}
	this.ship.animate({
			bottom : 15,
			left : '50%'
		}, 3500, this.onReady)

	this.destroy = function($done){
		this.ship.stop().hide(1200, function(){
			$(this).remove();
			$done();
		});
	}
}