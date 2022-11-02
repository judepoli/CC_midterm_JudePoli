//calm -- 
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
    strokeWeight(0.75);
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
/*
  //ripple 
  ellipseSize += 1;

  stroke(col.x, col.y, col.z, 50);
  strokeWeight(0.75);
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
  

}


//
  console.log(posx);
  console.log(posy);
  //console.log("");
  //ellipse(mouseX, mouseY, l, l);
  //ellipse(mouseX+l, mouseY+l, l, l);
  //ellipse(mouseX-l, mouseY-l, l, l);





/*
class Ripple (){
  constructor(){
    this.x=ellipse(width*4/5);
    this.y=ellipse (height*4/5);
    this.ellipseSize += 5;
  }

  display(){
    ellipse(this.x, this.y, this.ellipseSize);
    ellipse(this.x, this.y, this.ellipseSize*0.5);
    ellipse(this.x, this.y, this.ellipseSize*0.75);
  }


  for (let eL = 0.05; eL <= 15; eL += 1){
      stroke(col.x, col.y, col.z, 50);
      strokeWeight(0.8);
      noFill();
      ellipse(posx, posy, l*(1+eL));
    }

  /*
  ellipseSize +=5;
  ellipseA = ellipse(width*4/5);
  ellipseB = ellipse (height*4/5);

  stroke(255);
  strokeWeight(1);
  ellipse(ellipseA, ellipseB, ellipseSize);
  ellipse(ellipseA, ellipseB, ellipseSize*0.5);
  ellipse(ellipseA, ellipseB, ellipseSize*0.75);
  */

// i want to have background show up as tide pool effect -- riplles throughout 
//of diff calm colors














