
function ship(){
	this.gun = true;
	this.rapid = true;
	this.shots = 0;
	var ship = this.ship = $("<div class='ship' />").appendTo($(".field"));
	$('.field').mousemove(function(e){
				ship.css({
					left : e.clientX
				})
			})
	this.ship.animate({
			bottom : 27
		}, 3500)

	this.shoot = function(){
		this.shots++;
		if(this.shots > 150)
			this.rapid = false;
		var $stat = this.gun;
		this.gun = !$stat;
		var pos = this.ship.position(),
		leftPos = pos.left - 17,
		rightPos = pos.left + 7,
		guns = this.rapid ? [leftPos, rightPos] : [$stat ? leftPos : rightPos];
		$.each(guns, function(nuhXD, Lpos){
			pos.left = Lpos;
			new bullet(pos, true);
		})
	}

	this.destroy = function($done){
		$('.field').unbind('mousemove');
		this.ship.stop().hide(1200, function(){
			$(this).remove();
			$done();
		});
	}
}

function bullet(pos, dir){
	var $colors = [
	    '#ff00ff',
		'#00ffff',
		'#00ff00',
		'#ffff00',
		'#ff0000',
		'#0000ff',
		'#7920FF',
		'#FD0987',
		'#FF3300'
	];
	var $bullet = $("<div class='bullet'/>").appendTo($('.field'));
	pos.background = $.shuffle($colors).shift();
	pos.border = $.shuffle($colors).shift() + " 3px solid";
	$bullet.css(pos).animate(dir ? {
		top : 0,
		background : $.shuffle($colors).shift()
	} : {
		top : 770,
		background : $.shuffle($colors).shift()
	}, 500, function(){
		$(this).remove();
	})
}