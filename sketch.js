var myShip;
var myGrid;
function setup() {
  createCanvas(700, 700);
  myShip=new ship(350,350,198,"Bacon Man 69");
  myGrid=new grid(75,75,7,7,75);

  myShip.goTo(myGrid.getPixelPos(3,4))
}

function draw() {
  background(0);
  fill("blue");
  myGrid.display();


  fill(255);
  circle(mouseX,mouseY,10);
  myShip.updateShip();
  let arr = myShip.getCoins();
  //print(arr);
  let g = arr[0];
  let s = arr[1];
  let c = arr[2];
  textSize(25)
  text(`Test Ship Cash: \n${g} Guld\n ${s} Sølv\n ${c} Kobber`, 180, 50);
}