let t0;
let t;
let col;
let frameR = 30;
let colorRefresh = 3000; // refresh every N/1000 seconds
let w = 1000
let l = 1000

function setup() {
  createCanvas(w, l);
//background(0);
  frameRate(frameR); // how many times per second is the draw() function called
  // set  clock
  t0 = millis();
  t = t0;
  // initial color of the ellipse
  col = createVector(255, 255, 255);
}

//mkae pos accurate to corner
function objectPosition(t, x) {
   t = t / random(0.5,2);
  if (x) {
    return map(t, 0, colorRefresh, width*1/5, width*4/5);
  } else {
    return map(sin(t), -1, 1, height*1/5, height*4/5);
  }
  
}


function draw() {
  let l = 50;
  let transparency = 15; // play w  numbers
  noStroke();
  fill(0, 0, 0, transparency);
  rect(0, 0, width, height);
  
  t = millis();
  if ((t-t0) >= colorRefresh) {
    // change circle color every colorRefresh seconds
    col.set(random(0.5,1.5)*col.x,random(0.5,1.5)*col.y,random(0.5,1.5)*col.z)
    // reset  clock
    t0 = t;
    console.log("changing color ...");
  }
  noStroke();
  fill(col.x, col.y, col.z);
  let posx = objectPosition(t-t0, true);
  let posy = objectPosition(t-t0, false);
  console.log(posx);
  console.log(posy);
  ellipse(posx, posy, l, l);
  //console.log(posx);
  //console.log(posy);
  //console.log("");
  //ellipse(mouseX, mouseY, l, l);
  //ellipse(mouseX+l, mouseY+l, l, l);
  //ellipse(mouseX-l, mouseY-l, l, l);

}