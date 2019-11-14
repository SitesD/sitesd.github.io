var cnv = document.getElementById('canvas'),
	ctx = cnv.getContext('2d');
	
var	trava = new Image();
	trava.src = "name.png";
	
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
	
var	x = 0;
var	y = 0;
var	h = 760;
var	w = 1020;
var mas = []
var z = 0

var p = 0

for (x; x <= w; x += 20) {
	ctx.moveTo(x, 0);
	ctx.lineTo(x, w);
	
	ctx.moveTo(0, x);
	ctx.lineTo(w, x);
	
	mas[z] = [[[x,0],[x,h]],[[0,x],[w,x]]];
	z++;
}
var mas_2 = [];
g = 0
var l = 0;
for (var p = 0; p <= h; p+=20){
	console.log("Wave ", l);
	for (var u = 0; u <= w; u += 20) {
		if ((u/20) % 2 == 0)
			{
				ctx.fillStyle = "green";
			}
		else{
				ctx.fillStyle = "#CC99FF";
			}
			ctx.fillRect(p, u, p+20, u+20);
		z = u/20+p/20 + g
		mas_2[z] = [p, u, p+20, u+20];
		console.log(z, [p, u, p+20, u+20]);
		}
	g = z;
	l++;	
}

ctx.strokeStyle = "#000000";
ctx.stroke();