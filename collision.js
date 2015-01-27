var $det = {stop : function(){}};
$.hook('gameStart', function(){
	$det = new $.detection();
})

$.hook('gameStop', function(){
	$det.stop();
});

$('.bullet:not(".enemy")').onCollide(".monster", function(){
	if('monster' in this)
		this.monster.destroy();
});

$('.bullet:not(".friendly")').onCollide('.ship', function(){
	$.craft.hit();
})