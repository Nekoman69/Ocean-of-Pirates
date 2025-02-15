let mysteryCards = [
  "Du har vundet 100 kr!",
  "Tabt i ørkenen. Gå to skridt tilbage.",
  "Modtag en gratis middag!",
  "Find skattekisten og få 500 kr!",
  "Du er blevet forfulgt af pirater. Betal 50 kr i løsesum.",
  // Tilføj flere "mystery cards" her...
];
let drawnCard = "";
let isTextVisible = false;
let isGridPaused = false;
var myGrid;
var myManager;
var turnButton;
var moving =false;
var mouseDown = false;

//The turn inside the manager class cant be called from a button.
function newTurnSus(){
  myManager.newTurn();
}
//The move inside the ship class cant be called from a button.
function moveShipSus(){
  if (myManager.canMove==true){
    moving=true;
    mouseDown=true;
    print("Moving is "+moving)
    myManager.getActivePlayer()
  } else {
    print("You already moved");
  }
}
function drawMysteryCard() {
  console.log("Draw Card")
  // Træk et tilfældigt kort fra mysteryCards-listen
  let randomIndex = floor(random(mysteryCards.length));
  //drawnCard = mysteryCards[randomIndex];
  drawnCard = random(mysteryCards);
  textAlign(CENTER, CENTER)
  background(220);

  textSize(20);
  fill(0);
  text(drawnCard, width / 2, height / 2 - 20);
    
   // Vis teksten
   isTextVisible = true;
   grid.js=wait(5000)
   isGridPaused = true;
 
   // Vent i 5 sekunder og skjul teksten derefter
   setTimeout(function () {
     isTextVisible = false;
  
     isgridPaused = false;
   }, 5000); // 5000 millisekunder (5 sekunder)
 }

function setup() {
  createCanvas(700, 700);
  //Basic classes
  myGrid=new grid(75,75,7,7,75);
  myManager= new manager();
  myManager.addPlayer(new ship(350,350,198,"Bacon Pirate 69"));
  myManager.addPlayer(new ship(350,350,198,"Pirate Slayer 420"));
  myShip=myManager.getPlayer("Bacon Pirate 69");

  //Buttons
  print(myManager.turn)
  let buttonSize=25
  newButton(turnButton,"New turn", newTurnSus, 50, myGrid.padding/2-buttonSize/2, buttonSize)  
  newButton(turnButton,"Move ship", moveShipSus, 150, myGrid.padding/2-buttonSize/2, buttonSize)
  newButton(turnButton,"Draw card", drawMysteryCard, 250, myGrid.padding/2-buttonSize/2, buttonSize)

  //Spawnpositions / Tests.
  myShip.goTo(myGrid.getPixelPos(1,1))
  myManager.getPlayer("Pirate Slayer 420").goTo(myGrid.getPixelPos(5,5))
}

function draw() {
  background(0);
  fill("blue");
  myGrid.display();
  myManager.display();

  //Cursor indicator
  fill(255);
  circle(mouseX,mouseY, 10);
  if (moving==true){
    let _gridPos = myGrid.getSnappedPos(mouseX,mouseY)
    fill(0,255,0)
    circle(_gridPos.x,_gridPos.y, 75);

    if (mouseIsPressed === true && mouseDown===false) {
      print("Moving now");
      let grid_idx = myGrid.getIndex(mouseX,mouseY)
      print("mouse pos on grid is: "+grid_idx.x+ " x, "+grid_idx.y+" y");
      //let _player=myManager.getActivePlayer()
      myManager.getActivePlayer().goTo(myGrid.getPixelPos(grid_idx.x,grid_idx.y))
      myManager.canMove=false;
      moving=false;
      mouseDown=true;
    } 
    if(mouseIsPressed === false){
      //print("mouse not pressed")
      mouseDown=false
    }
  }

  //Update Ship visuals
  fill(255)
  myShip.updateShip();
  myManager.getPlayer("Pirate Slayer 420").updateShip();

  //Show coins
  let arr = myShip.getCoins();
  textSize(25)
  text(`Test Ship Cash: \n${arr[0]} Guld\n ${arr[1]} Sølv\n ${arr[2]} Kobber`, 180, 50);
}

