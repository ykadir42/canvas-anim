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
var animation = 0;
var growing = true;
var counter = 0;
var pos_x = 200;
var pos_y = 300;
var vel_x = 3;
var vel_y = 2;
var frame = null;

//draws the dot
var draw = function(e){
	ctx.clearRect(0, 0, 600, 600);
	ctx.beginPath();
	if(animation == 1){
	    if(growing){
			ctx.arc(300, 300, counter++, 0, 2*Math.PI);
			ctx.fill();
	    }
		else{
			ctx.arc(300, 300, counter--, 0, 2*Math.PI);
			ctx.fill();
		}
		if(counter == 0 || counter == 50) growing = !growing;
	}
	else{
		ctx.arc(pos_x, pos_y, 20, 0, 2*Math.PI);
		ctx.fill();
		pos_x += vel_x;
		pos_y += vel_y;
		if(Math.abs(300 - pos_x) > 280) vel_x *= -1;
		if(Math.abs(300 - pos_y) > 280) vel_y *= -1;
	}
	frame = window.requestAnimationFrame(draw);
	console.log(frame);
};

var circle = function(e){
	if(animation != 1){
		window.cancelAnimationFrame(frame);
		animation = 1;
		growing = true;
		counter = 0;
		frame = window.requestAnimationFrame(draw);
	}
};

var dvd = function(e){
	if(animation != 2){
		window.cancelAnimationFrame(frame);
		ctx.clearRect(0, 0, 600, 600);
		animation = 2;
		pos_x = 200;
		pos_y = 300;
		vel_x = 3;
		vel_y = 2;
		frame = window.requestAnimationFrame(draw);
	}
};

var stop = function(e){
	if(animation != 0){
		window.cancelAnimationFrame(frame);
		ctx.clearRect(0, 0, 600, 600);
		animation = 0;
		frame = null;
	}
}

document.getElementById("stop").addEventListener("click", stop);
document.getElementById("circle").addEventListener("click", circle)
document.getElementById("dvd").addEventListener("click", dvd);


