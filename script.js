// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *    mouseX, mouseY, rect, stroke, strokeWeight, width
 */

let brushHue;
let prevMouseX, prevMouseY

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  
  // Initialize brushHue to 0 (which is delcared at the top)
  brushHue = 0;
  strokeWeight(6);
  background(95); 
}

function draw() {
  // Draw the background to clear the screen at the beginning of the frame
  
  
  prevMouseX = mouseX
  prevMouseY = mouseY
  
  
  if(mouseIsPressed){
    brushDraw()
  }
  
  // Draw a 15 x 15 sized square at mouseX and mouseY
  // rect(mouseX, mouseY, 15, 15);
}

//increase the hue value on HSB scale, back to red when hue > 360
function chooseColors() {
  brushHue += 1
  if(brushHue > 360) {
    resetHue()
  }
  
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

//reset hue to red
function resetHue() {
  brushHue = 0
}

//reset canvas color
function clearCanvas() {
  background(95)
}

function mouseDragged() {
  brushDraw()
}

//draw line and change brush color
function brushDraw() {
  line(prevMouseX,prevMouseY, mouseX, mouseY)
  chooseColors();
  
}

//reset canvas when any key is pressed
function keyPressed() {
  clearCanvas()
}