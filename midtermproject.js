function setup() {
	createCanvas(800, 800);
	background(0);
}

function draw() {
  	fill(255, 0, 0);
	noStroke ();
	strokeWeight(4)
	ellipse (width/2, height/2, -150, 150, 200);
	ellipse (width/2.5, height/2.9, 150, 200, -150);
	ellipse (width/1.7, height/2.9, 150, 200, -150);

	fill(0, 190, 100);
	rect(width/2, height/1.3, 120, 40);
	rect (height/2.2, width/1.685, 40, 180);

	fill(100);
	

}

