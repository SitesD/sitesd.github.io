
var f = 'True',
	iterations = 100;
		
var options = {
    count: 10, 
    size: 50, 
    sizeRandom: 1000, 
    sparkLife: 0.1, 
    spawnOpacity: 1,
    hueRotationSpeed: 7,
	step: 5,
	speed: 4,
	new_live: 20,

    color: "rgba(39, 173, 96, alpha)" 
  },
  
  massive_data_arc = [],
  
  arcs ={
	color: '',
	position_x: 0,
	position_y: 0,
	radius: 5,
  },
  
  
  canvasBody = document.getElementById("canvas"),
  canvas = canvasBody.getContext("2d"),
  w = canvasBody.width = window.innerWidth,
  h = canvasBody.height = window.innerHeight;
  
//canvas.arc(100, 100, 20, 0, Math.PI*2);
//canvas.fill();

setInterval(function anim() {
	//window.requestAnimationFrame(anim);		
	if (iterations % options.new_live == 0)
	{
		f = 'False';
	}
	else
	{
		f = 'True'	
	}
	//canvas.fillStyle = 'white';
	//canvas.fillRect(0, 0, w, h);
	step(f,iterations);
	iterations++;
	//console.log(iterations);
},25
)

anim();

function randInt(min, max){
	// получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function create_circle(p_x, p_y, r, l)
{
	return{
		//color: color,
		position_x: p_x,
		position_y: p_y,
		radius: r,
		live: l,
	};
}

function new_snow(kol, massive_data_arc)
{
	//var new_mass = [];	
	for (var i = 0; i < kol; i++)
	{
	var random_x = randInt(1,w),
	    random_y = 0,
		l = randInt(1,h/options.step);
		
	let circ = create_circle(random_x, random_y, arcs.radius, l);
	massive_data_arc.push(circ);
	}
	return massive_data_arc
}

function step(f,iterations) {
	//console.log('while ',iterations, f);
  var fillColor = options.color.replace("alpha", options.spawnOpacity);
  canvas.fillStyle = fillColor;
  if ( f == 'False'){
  massive_data_arc = new_snow(randInt(3,50), massive_data_arc);}
  //console.log(massive_data_arc);
  if (iterations % options.speed == 0) {
	  console.log('wbile_2 ',iterations);
	  for (var i = 0; i < massive_data_arc.length; i++) 
	  {
		//massive_data_arc[i].position_x = massive_data_arc[i].position_x-options.step;
		massive_data_arc[i].live = massive_data_arc[i].live-1;
		
		if (massive_data_arc[i].live == 0) {
			massive_data_arc.splice(i,1);
			canvas.beginPath();
			canvas.fillStyle = "rgba(255,255,255)";
			canvas.arc(massive_data_arc[i].position_x, massive_data_arc[i].position_y, massive_data_arc[i].radius+10, 0, Math.PI*2);
			canvas.fill();
			//console.log("удалил ",i);
		}
		else{
		//console.log(i , massive_data_arc[i]);
		canvas.beginPath();
		canvas.fillStyle = "rgba(255,255,255)";
		canvas.arc(massive_data_arc[i].position_x, massive_data_arc[i].position_y, 
		massive_data_arc[i].radius+10, 0, Math.PI*2);
		canvas.fill();
		
		massive_data_arc[i].position_y = massive_data_arc[i].position_y+options.step+randInt(1,10);
		if (randInt(1,10)>=5){
			massive_data_arc[i].position_x = massive_data_arc[i].position_x+randInt(1,10);
		}
		else{
			massive_data_arc[i].position_x = massive_data_arc[i].position_x-randInt(1,10);
		}
		canvas.beginPath();
		canvas.fillStyle = "rgba(0,100,200,"+massive_data_arc[i].live/10+")";
		canvas.arc(massive_data_arc[i].position_x, massive_data_arc[i].position_y, massive_data_arc[i].radius, 0, Math.PI*2);
		canvas.fill();
		//console.log(random_x,random_y);
		}
	  //canvas.fillStyle = "rgba(255,255,255,"+options.sparkLife+")";
	  //canvas.fillStyle = 'white';
	  //canvas.fillRect(0, 0, w, h);
	  }
  }
}

window.addEventListener("resize", function() { //Just in case someone resizes the window
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
});
/*
function isNaturalNumber(n) {
  n = n.toString(); // force the value incase it is not
  var n1 = Math.abs(n),
    n2 = parseInt(n, 10);
  return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}*/