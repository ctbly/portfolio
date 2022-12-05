const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => onMouseMove(event));

const onMouseMove = (event) => {
  const maxDeg = 20;

  const mousePosX = event.clientX;
  const mousePosY = event.clientY;
  //console.log("X:" + event.clientX);
  //console.log("Y:" + event.clientX);
  const cardWidth = card.offsetWidht;
  const cardHeight = card.offsetHeight;
  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2;

  //Trouvez la valeur négative ou positive en fonction de l'axe
  const xPos = mousePosX - xMid;
  //ajoutez le Y
  const yPos = mousePosY - yMid;
  //console.log(xPos);

  //Trouvez proportionnellement le degrès
  const xDeg = (xPos * maxDeg) / xMid;
  //ajoutez le Y
  const yDeg = (yPos * maxDeg) / yMid;

  card.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg}deg)`;
  //ajoutez le Y a la suite
};

var leftEnter = {
  distance: "150%",
  origin: "left",
  opacity: null,
  delay: 500,
  duration: 1000,
};

ScrollReveal().reveal(".left", leftEnter);

var cardEnter = {
  distance: "150%",
  origin: "right",
  opacity: null,
  delay: 900,
  duration: 1000,
};

ScrollReveal().reveal(".card-container", cardEnter);
