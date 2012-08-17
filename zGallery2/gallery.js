Math.rnd = Math.random;
Math.random = function (a,b){
	return Math.floor(Math.rnd()*(b-a+1))+a;
};

$(function(){
	var pic=$('div.gallery a');
	pic.each(function  () {
		var that=this;
		setTimeOut(function(){
			$(that).animate({
				opactity:0.9;
				left:Math.random(30,450),
				top:Math.random(30,330),
				rotate:Math.random(-90,90)+'deg'
			})
		},1000);
	})
});
