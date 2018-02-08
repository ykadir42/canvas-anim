// Jawadul Kadir
// SoftDev2 pd7
// K02 -- They lock us in the tower whenever we get caught
// 2018-2-7

//getting the canvas
var c = document.getElementById("slate");
//getting the context of the canvas
var ctx = c.getContext("2d");

//setting fill and stroke style
ctx.fillStyle = "#dabbed";
ctx.strokeStyle = "#dabbed";
console.log(ctx);

//state variables for animation
var animated = false;
var growing = true;
var counter = 0;
var frame;

//draws the dot
var draw = function(e){
	ctx.clearRect(0, 0, 600, 600);
	ctx.beginPath();
    if(growing){
		ctx.arc(300,300,counter++,0,2*Math.PI);
		ctx.fill();
    }
	else{
		ctx.arc(300,300,counter--,0,2*Math.PI);
		ctx.fill();
	}
	if(counter == 0 || counter == 50) growing = !growing;
	frame = window.requestAnimationFrame(draw);
};

var animate = function(e){
	if(!animated){
		animated = true;
		frame = window.requestAnimationFrame(draw);
	}
};

var stop = function(e){
	if(animated){
		window.cancelAnimationFrame(frame);
		ctx.clearRect(0,0,600,600);
		animated = false;
	}
}

document.getElementById("stop").addEventListener("click", stop);
document.getElementById("animate").addEventListener("click", animate)

