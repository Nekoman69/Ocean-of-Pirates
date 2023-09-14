let mysteryCards = [
    "Du har vundet 100 kr!",
    "Tabt i ørkenen. Gå to skridt tilbage.",
    "Modtag en gratis middag!",
    "Find skattekisten og få 500 kr!",
    "Du er blevet forfulgt af pirater. Betal 50 kr i løsesum.",
    // Tilføj flere "mystery cards" her...
  ];
  
  let drawnCard = "";
  function drawMysteryCard() {
    // Træk et tilfældigt kort fra mysteryCards-listen
    let randomIndex = floor(random(mysteryCards.length));
    drawnCard = mysteryCards[randomIndex];
  }
  