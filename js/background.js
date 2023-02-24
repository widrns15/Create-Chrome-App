const images = [
  "cat1.jpeg",
  "cat2.jpeg",
  "cat3.jpeg",
  "cat4.jpeg",
  "cat5.jpeg",
  "cat6.jpeg",
  "cat7.png",
  "cat8.jpeg",
  "cat9.jpeg",
  "cat10.jpeg",
  "cat11.jpeg",
  "kirby1.jpeg",
  "kirby2.jpeg",
  "kirby3.jpeg",
  "kirby4.jpeg",
  "kirby5.jpeg",
  "pok1.jpeg",
  "pok2.jpeg",
  "pok4.png",
  "pok5.png",
  "pok6.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
