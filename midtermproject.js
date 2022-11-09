//calm 
let t0;
let t;
let col;
let frameR = 3;
let w = 850;
let l = 850;
var rain = [];
let skyRefresh = 2000; // refresh every N/1000 seconds
let sky;
//let ellipseSize;
//let ripple;

function setup(){
	createCanvas(800, 800);

	for(var i = 0; i<300; i++){
  		rain[i] = new Rain();
  	}

	frameRate(frameR); // how many times per second is the draw() function called// set  clock
  	t0 = millis(); 
 	t = t0; 
 	sky = quad(245, 50, 615, 132, 315, 640, 74, 620); //inside rect skylight SKY

  	
  }


function draw(){
	
	//background(157, 161, 159);


  	for(var i = 0; i<300; i++){
  		rain[i].show();
  		rain[i].update();
  	}
  	

	//let l =10; //circle size 
  	let transparency = 20; // how thick
  
	
	//skylight

	noStroke();
	fill(70, 159, 245, transparency);
	quad(245, 50, 615, 132, 315, 640, 74, 620); //inside rect skylight SKY

	noStroke();
	fill(237, 236, 250,  transparency);
	quad(247, 51, 700, 150, 315, 720, 50, 700); //outside rect skylight 

	
	noStroke();
	fill(230, 230, 250, transparency);
	quad(245, 50, 640, 137, 315, 662, 67, 642); //shadow 

	
	stroke(95, 97, 96);
	strokeWeight(0.05);
	line(315, 640, 315, 720);
  
  }



function Rain(){
	this.x = random(0, width);
	this.y = random(0, -height);

	this.show = function(){
	noStroke();
	fill(255);
	ellipse(this.x, this.y, 2, 6);
	}

	this.update = function(){
		this.speed = random(5, 20);
		this.gravity = 1.02;
		this.y = (this.y + this.speed)*this.gravity;

		if (this.y>height){
			this.y=random(0, -height);
			this.gravity = 0;
		}
	}


}

function mousePressed(){
	sky = color(0, 0, 255);
	
}



/*
class Rain{
	constructor(x, y, xPosition, yPosition){
		this.x = x;
		this.y = y;
		this.xPosition = xPosition;
		this.yPosition = yPosition;
	}

	move(){
		this.y += this.yPosition;
		if(this.y<60 || this.y>620){
			this.yPosition *=6;
		}
		this.x += this.xPosition;
		if(this.x<245 || this.x>615){
			this.xPosition *=6;
		}
	}

	display(){
		for let 


			ellipse(this.x*i, this.y*j, l/70, l/70);
			}
		}
		
	}

}
*/




/*
function objectPosition(t, x) {
   t = t / random(0.5, 1);
  if (x) {
    return map(t, 1, colorRefresh, 247, 700);
  } else {
    return map(sin(t), -1, 1, 51, 700);
  }
  
}



*/


/*
//calm -- working draft 
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










