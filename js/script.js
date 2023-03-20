const container = document.querySelector(".mavs-container");
container.addEventListener("mousemove", (e) => {
  const mavsWrapper = document.querySelector(".mavs-wrapper");
  const pupil = document.querySelector(".mavs-eye-pupil");

  let mouseY = e.clientY;
  let movementY = mouseY / 50 - 7;
  let bodyMovementY = mouseY / 100 - 3;
  pupil.style.transform = `translateY(${movementY}px)`;

  mavsWrapper.style.transform = `rotate(${bodyMovementY}deg)`;
});

var r = document.querySelector(":root");
// outer = lighter, inner = darker
function setGreen() {
  r.style.setProperty("--inner", "#538b00");
  r.style.setProperty("--outer", "#06b900");

  let audio = new Audio("audio/low.mp3");
  audio.play();
}

function setBlue() {
  r.style.setProperty("--inner", "#1747ff");
  r.style.setProperty("--outer", "#00c5e7");

  let audio = new Audio("audio/normal.mp3");
  audio.play();
}

function setOrange() {
  r.style.setProperty("--inner", "#ff6400");
  r.style.setProperty("--outer", "#ff9100");

  let audio = new Audio("audio/elevated.mp3");
  audio.play();
}

function setRed() {
  r.style.setProperty("--inner", "#af0000");
  r.style.setProperty("--outer", "#e50000");

  let audio = new Audio("audio/high.mp3");
  audio.play();
}

const greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", (e) => {
  setGreen();

  slider.value = 25;
});

const blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", (e) => {
  setBlue();
  slider.value = 75;
});

const orangeBtn = document.querySelector(".orange");
orangeBtn.addEventListener("click", (e) => {
  setOrange();
  slider.value = 125;
});

const redBtn = document.querySelector(".red");
redBtn.addEventListener("click", (e) => {
  setRed();
  slider.value = 175;
});

const helloBtn = document.querySelector(".btnHello");
helloBtn.addEventListener("click", (e) => {
  let audio = new Audio("audio/hello.mp3");
  audio.play();

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  setTimeout(changeLoader, 4000);
});

const basemapBtn = document.querySelector(".btnBaseMap");
basemapBtn.addEventListener("click", (e) => {
  let audio = new Audio("audio/generating-basemap.mp3");
  audio.play();

  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "none";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  const loaderTwo = document.querySelector(".loadingSpinner2");
  loaderTwo.style.display = "flex";

  setTimeout(changeLoaderBasemap, 3500);
});

function changeLoader() {
  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "flex";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "none";

  const loaderTwo = document.querySelector(".loadingSpinner2");
  loaderTwo.style.display = "none";
}

function changeLoaderBasemap() {
  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "flex";

  const basemap = document.querySelector(".basemap");
  basemap.style.display = "flex";

  const prompts = document.querySelector(".prompts");
  prompts.style.display = "none";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "none";

  const loaderTwo = document.querySelector(".loadingSpinner2");
  loaderTwo.style.display = "none";
}

const closeBasemap = document.querySelector(".closeMapBtn");
closeBasemap.addEventListener("click", (e) => {
  var audio = new Audio("audio/shutdown-basemap.mp3");
  audio.play();

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  setTimeout(closingBasemap, 3000);
});

function closingBasemap() {
  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "flex";

  const basemap = document.querySelector(".basemap");
  basemap.style.display = "none";

  const prompts = document.querySelector(".prompts");
  prompts.style.display = "flex";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "none";

  const loaderTwo = document.querySelector(".loadingSpinner2");
  loaderTwo.style.display = "none";
}

// SLIDER
let slider = document.getElementById("myRange");

slider.onchange = function () {
  if (slider.value < 50) {
    setGreen();
  } else if (slider.value >= 50 && slider.value < 100) {
    setBlue();
  } else if (slider.value >= 100 && slider.value < 150) {
    setOrange();
  } else {
    setRed();
  }
};
