//calm -- working code 
let t0;
let t;
let col;
let frameR = 4;
let colorRefresh = 3000; // refresh every N/1000 seconds
let ellipseForm = 1500;
let w = 850;
let l = 850;
//let ellipseSize;
//let ripple;

function setup(){
	createCanvas(800, 800);
	background(157, 161, 159);
	frameRate(frameR); // how many times per second is the draw() function called
  	// set  clock
  	ellipseSize = l/5;
  	t0 = millis();
 	t = t0;
  	col = createVector(65, 102, 235);// initial color of the ellipse
  
}

function draw(){
	

	let l =20; //circle size 
  	let transparency = 40; // how thick
  	noStroke();
  	fill(55, 88, 235, transparency); //background color
 	rect(0, 0, width, height); //background as rect being redrawn so fade occurs 
  
  	t = millis();
  	if ((t-t0) >= colorRefresh) {    // change circle color every colorRefresh seconds
   		col.set(random(0.5,1.5)*col.x,random(0.5,1.5)*col.y,random(0.5,1.5)*col.z)
    	t0 = t; //reset time
    	console.log("changing color ...");
  	}

  	noStroke();
  	fill(col.x, col.y, col.z);
  	let posx = objectPosition(t-t0, true);
  	let posy = objectPosition(t-t0, false);
  	console.log(posx);
 	console.log(posy);
  	ellipse(posx, posy, l, l);

  if (t-t0){
    ellipseSize += 3;

    stroke(col.x, col.y, col.z, 50);
    strokeWeight(0.8);
    noFill();
    ellipse(posx, posy, ellipseSize);
    ellipse(posx, posy, ellipseSize*0.85);
    ellipse(posx, posy, ellipseSize*0.75);
    ellipse(posx, posy, ellipseSize*0.7);
    ellipse(posx, posy, ellipseSize*0.65);
 	ellipse(posx, posy, ellipseSize*0.6);
  	ellipse(posx, posy, ellipseSize*0.55);
  	ellipse(posx, posy, ellipseSize*0.5);
  	ellipse(posx, posy, ellipseSize*0.45);
  	ellipse(posx, posy, ellipseSize*0.4);
    ellipse(posx, posy, ellipseSize*0.35);
  	ellipse(posx, posy, ellipseSize*0.3);
  	ellipse(posx, posy, ellipseSize*0.25);
  	ellipse(posx, posy, ellipseSize*0.2);
    ellipse(posx, posy, ellipseSize*0.15);
    ellipse(posx, posy, ellipseSize*0.1);
    ellipse(posx, posy, ellipseSize*0.05);
	}

//skylight
	noStroke();
	fill(237, 236, 250);
	quad(247, 51, 700, 150, 315, 720, 50, 700); //outside rect skylight 

	
	noStroke();
	fill(230, 230, 250);
	quad(245, 50, 640, 137, 315, 662, 67, 642); //shadow 

	noStroke();
	fill(199, 223, 237, 60);
	quad(245, 50, 615, 132, 315, 640, 74, 620); //inside react skylight SKY

	stroke(95, 97, 96);
	strokeWeight(0.05);
	line(315, 640, 315, 720);

	

}


function objectPosition(t, x) {
   t = t / random(0.5,2);
  if (x) {
    return map(t, 0, colorRefresh, width*1/20, width*18/20);
  } else {
    return map(sin(t), -1, 1, height*1/20, height*18/20);
  }
  
}







/*
//calm -- working code 
let t0;
let t;
let col;
let frameR = 4;
let colorRefresh = 3000; // refresh every N/1000 seconds
let ellipseForm = 1500;
let w = 850;
let l = 850;
//let ellipseSize;
//let ripple;




function setup() {
  createCanvas(w, l);
  frameRate(frameR); // how many times per second is the draw() function called
  // set  clock
  ellipseSize = l/5;
  t0 = millis();
  t = t0;
  col = createVector(65, 102, 235);// initial color of the ellipse
  
}

function objectPosition(t, x) {
   t = t / random(0.5,2);
  if (x) {
    return map(t, 0, colorRefresh, width*1/20, width*18/20);
  } else {
    return map(sin(t), -1, 1, height*1/20, height*18/20);
  }
  
}

function draw() {

  let l =20; //circle size 
  let transparency = 40; // how thick
  noStroke();
  fill(55, 88, 235, transparency); //background color
  rect(0, 0, width, height); //background as rect being redrawn so fade occurs 
  
  t = millis();
  if ((t-t0) >= colorRefresh) {    // change circle color every colorRefresh seconds
    col.set(random(0.5,1.5)*col.x,random(0.5,1.5)*col.y,random(0.5,1.5)*col.z)
    t0 = t; //reset time
    console.log("changing color ...");
  }
  noStroke();
  fill(col.x, col.y, col.z);
  let posx = objectPosition(t-t0, true);
  let posy = objectPosition(t-t0, false);
  console.log(posx);
  console.log(posy);
  ellipse(posx, posy, l, l);

  if (t-t0){
    ellipseSize += 3;

    stroke(col.x, col.y, col.z, 50);
    strokeWeight(0.8);
    noFill();
    ellipse(posx, posy, ellipseSize);
    ellipse(posx, posy, ellipseSize*0.85);
    ellipse(posx, posy, ellipseSize*0.75);
    ellipse(posx, posy, ellipseSize*0.7);
    ellipse(posx, posy, ellipseSize*0.65);
  ellipse(posx, posy, ellipseSize*0.6);
  ellipse(posx, posy, ellipseSize*0.55);
  ellipse(posx, posy, ellipseSize*0.5);
  ellipse(posx, posy, ellipseSize*0.45);
  ellipse(posx, posy, ellipseSize*0.4);
    ellipse(posx, posy, ellipseSize*0.35);
  ellipse(posx, posy, ellipseSize*0.3);
  ellipse(posx, posy, ellipseSize*0.25);
  ellipse(posx, posy, ellipseSize*0.2);
    ellipse(posx, posy, ellipseSize*0.15);
      ellipse(posx, posy, ellipseSize*0.1);
        ellipse(posx, posy, ellipseSize*0.05);




  }
}



//
  console.log(posx);
  console.log(posy);




// i want to have background show up as tide pool effect -- riplles throughout 
//of diff calm colors


*/










