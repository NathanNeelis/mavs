const container = document.querySelector(".mavs-container");
container.addEventListener("mousemove", (e) => {
  const mavs = document.querySelector(".mavs-body");
  const mavsWrapper = document.querySelector(".mavs-wrapper");
  const eye = document.querySelector(".mavs-eye");
  const pupil = document.querySelector(".mavs-eye-pupil");

  let mouseY = e.clientY;
  let movementY = mouseY / 50 - 7;
  let bodyMovementY = mouseY / 100 - 3;
  pupil.style.transform = `translateY(${movementY}px)`;
  //   mavs.style.transform = `rotate(${bodyMovementY}deg)`;
  //   eye.style.transform = `translateY(${movementY}px)`;

  mavsWrapper.style.transform = `rotate(${bodyMovementY}deg)`;
});

var r = document.querySelector(":root");
// outer = lighter, inner = darker
function setGreen() {
  r.style.setProperty("--inner", "#538b00");
  r.style.setProperty("--outer", "#06b900");
}

function setBlue() {
  r.style.setProperty("--inner", "#1747ff");
  r.style.setProperty("--outer", "#00c5e7");
}

function setOrange() {
  r.style.setProperty("--inner", "#ff6400");
  r.style.setProperty("--outer", "#ff9100");
}

function setRed() {
  r.style.setProperty("--inner", "#af0000");
  r.style.setProperty("--outer", "#e50000");
}

const greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", (e) => {
  setGreen();
});

const blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", (e) => {
  setBlue();
});

const orangeBtn = document.querySelector(".orange");
orangeBtn.addEventListener("click", (e) => {
  setOrange();
});

const redBtn = document.querySelector(".red");
redBtn.addEventListener("click", (e) => {
  setRed();
});

const helloBtn = document.querySelector(".btnHello");
helloBtn.addEventListener("click", (e) => {
  var audio = new Audio("audio/hello.mp3");
  audio.play();

  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "none";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  setTimeout(changeLoader, 5000);
});

const basemapBtn = document.querySelector(".btnBaseMap");
basemapBtn.addEventListener("click", (e) => {
  var audio = new Audio("audio/generating-basemap.mp3");
  audio.play();

  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "none";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  setTimeout(changeLoader, 5000);
});

function changeLoader() {
  const basemapBtn = document.querySelector(".promptButtons");
  basemapBtn.style.display = "flex";

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "none";
}
