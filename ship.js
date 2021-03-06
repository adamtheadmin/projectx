
function ship(){
	this.gun = true;
	this.rapid = true;
	this.shots = 0;
	this.health = 100;
	this.healthbar = new healthbar(this.health);
	var ship = this.ship = $("<div class='ship' />").appendTo($(".field"));
	$('.field').mousemove(function(e){
				$('.healthbar').css({
					opacity : (1350 - e.clientX) / 1350 + (e.clientX < 350 ? 1 : 0)
				}, 100)
				ship.css({
					left : e.clientX
				})
			})
	this.ship.animate({
			bottom : 27
		}, 3500)

	this.hit = function(){
		this.health -= 5;
		if(this.health <= 3){
			$.banner('GAME OVER', function(){
				$.prepare(0)
			});
		}
		this.healthbar.set(this.health);
	}

	this.shoot = function(){
		this.shots++;
		var $stat = this.gun;
		this.gun = !$stat;
		var pos = this.ship.position(),
		leftPos = pos.left - 22,
		rightPos = pos.left + 10,
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
	this.enemy = !dir;
	this.div = $("<div class='bullet'/>").appendTo($('.field'));
	var $bullet = this.div,
	thisBullet = this,
	$colors = [
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
	this.destroy = function(){
		this.div.remove();
	}

	this.div.addClass(this.enemy ? 'enemy' : 'friendly');

	pos.background = $.shuffle($colors).shift();
	pos.border = $.shuffle($colors).shift() + " 3px solid";
	$bullet.css(pos).animate(dir ? {
		top : 0,
		background : $.shuffle($colors).shift()
	} : {
		top : 770,
		background : $.shuffle($colors).shift()
	}, this.enemy ? 350 : $.craft.rapid ? 350 : 550, function(){
		$(this).remove();
	})
}