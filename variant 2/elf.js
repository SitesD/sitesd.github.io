var cnv = document.getElementById('canvas'),
	ctx = cnv.getcontext('2d');
	
var	trava = new Image();
	trava.src = "name.png";
	
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
	
var	x = 0;
var	y = 0;
var	h = window.innerHeight;
var	w = window.innerWidth;
	
	setInterval(function(){
		ctx.moveTo(x,y);
		ctx.lineTo(x,h);
		x += 20
	},
	10); 