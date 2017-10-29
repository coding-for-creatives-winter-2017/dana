var shapes = {
	ellipse1: {
		type: 'ellipse',
		x: 0,
		y: 100,
		width: 100,
		height: 100,
		dragging: null
	},

	ellipse2: {
		type: 'ellipse',
		x: 0,
		y: 100,
		width: 100,
		height: 100,
		dragging: null
	},

	rectangle1: {
		type: 'rectangle',
		x: 0,
		y: 100,
		width: 100,
		height: 100,
		dragging: null
	}
};

function setup () {
	createCanvas(600,400);
}

// Check to see if the x and y coordinate are within the shape
function isWithinRectangle(x, y, shape) {
	// shape.x is the start of the shape, and shape.x + width is the end of the shape
	var xIsBetween = x >= shape.x && x <= shape.x + shape.width;
	var yIsBetween = y >= shape.y && y <= shape.y + shape.height;

	// Returns true if the x and the y are within the bounds of the shape
	return xIsBetween && yIsBetween;
}

function isWithinEllipse(x, y, shape) {
	var hRadius = shape.width / 2;
	var vRadius = shape.height / 2;
	var xIsBetween = (x >= (shape.x - hRadius)) && (x <= (shape.x + hRadius));
	var yIsBetween = (y >= (shape.y - vRadius)) && (y <= (shape.y + vRadius));

	return xIsBetween && yIsBetween;
}

// This executes if the mouse is pressed
function mousePressed () {
	var shape;

	for(var key in shapes) {
		shape = shapes[key];

		if (shape.type === 'ellipse') {
			if(isWithinEllipse(mouseX, mouseY, shape)) {
				shape.dragging = {
					offsetX: mouseX - shape.x,
					offsetY: mouseY - shape.y
				};

				break;
			}
		} else if (shape.type === 'rectangle') {
			if (isWithinRectangle(mouseX, mouseY, shape)) {
				shape.dragging = {
					offsetX: mouseX - shape.x,
					offsetY: mouseY - shape.y
				};

				break;
			}
		}
	}
}

function mouseDragged() {
	var shape;

	for(var key in shapes) {
		shape = shapes[key];

		if (shape.dragging) {
			shape.x = mouseX - shape.dragging.offsetX;
			shape.y = mouseY - shape.dragging.offsetY;
		}
	}
}

function mouseReleased() {
	for(var key in shapes) {
		shapes[key].dragging = null;
	}
}

// mouseIsPressed - True if the mouse is pressed

function draw () {
	var ellipse1 = shapes.ellipse1;
	var ellipse2 = shapes.ellipse2;
	var rectangle1 = shapes.rectangle1;

	// Setting the background color to black
	background(0,0,0);

	// Setting the color for the shapes
	fill(150,0,0);

	// If the user clicks on a shape and drags, move the shape
	// How to know if shape is clicked on?
	// How to get the new coordinates?

	// Draw two ellipses and a rectangle
	ellipse(ellipse1.x, ellipse1.y, ellipse1.width, ellipse1.height);

	rect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height);
	ellipse(ellipse2.x, ellipse2.y, ellipse2.width, ellipse2.height);
}