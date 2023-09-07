var myShip;

function setup() {
  createCanvas(700, 700);
  myShip=new ship(350,350,12);

}

function draw() {
  background(0);
  fill(100);
  circle(mouseX,mouseY,10);
  myShip.updateShip();
}