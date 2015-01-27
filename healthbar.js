
function healthbar(health){
	this.bar = $("<div />").addClass('healthbar').css({
		top : 550,
		right : -100
	}).animate({
		right : 5
	}, 2500).appendTo($('.field'));

	this.red = $("<div />").addClass('red').appendTo(this.bar);
	this.set = function($pct){
		this.red.css({
			height : $pct + '%'
		});
	}
	this.set(health);
}