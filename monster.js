var fs = require('fs');

$.rand = function(min, max) {
  var argc = arguments.length;
  if (argc === 0) {
    min = 0;
    max = 2147483647;
  } else if (argc === 1) {
    throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$.getMonster = function(){
	var $monsters = fs.readdirSync('./img/pokemon/');
	return "img/pokemon/" + $.shuffle($monsters).shift();
}


$.destroyAllMonsters = function(){
	$.each($.allMonsters, function(nuhXD, $mstr){
		$mstr.destroy();
	})
}

$.allMonsters = [];

function monster(wave){
	$.allMonsters.push(this);
	var thisMonster = this;
	this.src = $.getMonster();
	this.shots = 0;
	this.img = $("<img />").attr({
		src : this.src
	}).css({
		position : 'fixed',
		left : $.rand(50, 730),
		top : -150
	}).animate({
		top : 5
	}).appendTo($('.field')).addClass('monster');

	this.img[0].monster = this;

	this.shoot = function(){
		this.shots++;
		var pos = this.img.position();
		new bullet(pos, false);
	}

	this.shootInterval = setInterval(function(){
		thisMonster.shoot();
	}, $.rand(500, 2500));

	this.destroy = function(){
		clearInterval(this.shootInterval);
		this.img.hide();
	}


}