function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(0,0,0);  
  
} 

function draw() {
  
  var a = second ();
  
  stroke(a,100,150);
   
  var b = random(50,50);
  line(mouseX/a, mouseY/a, mouseX+b, mouseY+b);
  
if (mouseIsPressed){
stroke(a,200,30);
  line(mouseX,mouseY,b,b);
}
  
}