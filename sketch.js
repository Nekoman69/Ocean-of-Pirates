var myShip;

function setup() {
  createCanvas(700, 700);
  myShip=new ship(350,350,198,"Ham");

}

function draw() {
  background(0);
  fill(255);
  circle(mouseX,mouseY,10);
  myShip.updateShip();
  let arr = myShip.getCoins();
  //print(arr);
  let g = arr[0];
  let s = arr[1];
  let c = arr[2];
  textSize(25)
  text(`Test Ship Cash: ${g}g, ${s}s, ${c}c`, 50, 50);
}