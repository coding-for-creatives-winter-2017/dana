var x = 25;
var y = 25;
var xspeed = 3;
var yspeed = 3;

function setup(){
	createCanvas(windowWidth, windowHeight); 
	background(0,0,0);
}
function draw(){
	fill (random(240, 255), random(100, 200), random(158, 200));
	ellipse(x,y,100,100);

	x = x + xspeed;
	if (x > windowWidth || x < 0)  {
    	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
    	yspeed = -yspeed;
  	}
}