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

  setTimeout(promptHabitant, 5000);
});

const helloBtn = document.querySelector(".btnHello");
helloBtn.addEventListener("click", (e) => {
  let audio = new Audio("audio/hello.mp3");
  audio.play();

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  setTimeout(changeLoader, 4000);
});

// BASEMAP BASEMAP BASEMAP BASEMAP BASEMAP BASEMAP

let showBaseMap = false;

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

  showBaseMap = true;

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
  let audio = new Audio("audio/shutdown-basemap.mp3");
  audio.play();

  const loader = document.querySelector(".loadingSpinner");
  loader.style.display = "flex";

  showBaseMap = false;

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
  } else if (slider.value >= 150) {
    setRed();

    // prompt habitant after 5 seconds
    setTimeout(promptHabitant, 5000);
  }
};

function promptHabitant() {
  if (slider.value >= 150 && showBaseMap === false) {
    let audio = new Audio("audio/prompt-habitant.mp3");
    audio.play();

    const prompts = document.querySelector(".prompts");
    prompts.style.display = "none";

    const habitantResponse = document.querySelector(".habitantPrompts");
    habitantResponse.style.display = "flex";
  }
}

const responseOne = document.querySelector(".btnPA");
const responseTwo = document.querySelector(".btnEM");
const responseThree = document.querySelector(".btnCO");
if (responseOne || responseTwo || responseThree) {
  responseOne.addEventListener("click", responseAction);
  responseTwo.addEventListener("click", responseAction);
  responseThree.addEventListener("click", responseAction);
}

function responseAction() {
  let audio = new Audio("audio/assistance.mp3");
  audio.play();

  const prompts = document.querySelector(".prompts");
  prompts.style.display = "flex";

  const habitantResponse = document.querySelector(".habitantPrompts");
  habitantResponse.style.display = "none";
}

// SHOW HABITANTS ON MAP SHOW HABITANTS ON MAP SHOW HABITANTS ON MAP SHOW HABITANTS ON MAP

// datapoint slider
let datapointSlider = document.getElementById("datapointSlider");

// rooms
const researchFacility1 = document.querySelector(".research-facility-1");
const researchFacility2 = document.querySelector(".research-facility-2");
const researchFacility3 = document.querySelector(".research-facility-3");
const storage = document.querySelector(".storage");
const commandCentre = document.querySelector(".command-centre");
const commonRoom = document.querySelector(".common-room");
const showerFacilities = document.querySelector(".shower-facilities");
const sleepingQuarters = document.querySelector(".sleeping-quarters");
const fitnessFacilities = document.querySelector(".fitness-facility");

console.log("dataset", dataset);

updateMap(0, dataset);
visualizeMap(0, dataset);

datapointSlider.addEventListener("input", function (e) {
  let n = e.srcElement.value - 1;

  resetMap();
  updateMap(n, dataset);
  visualizeMap(n, dataset);
});

function resetMap() {
  researchFacility1.innerHTML = "";
  researchFacility1.style.opacity = "0";
  researchFacility1.style.borderColor = "white";
  researchFacility1.style.animation = "";

  researchFacility2.innerHTML = "";
  researchFacility2.style.opacity = "0";
  researchFacility2.style.borderColor = "white";
  researchFacility2.style.animation = "";

  researchFacility3.innerHTML = "";
  researchFacility3.style.opacity = "0";
  researchFacility3.style.borderColor = "white";
  researchFacility3.style.animation = "";

  storage.innerHTML = "";
  storage.style.opacity = "0";
  storage.style.borderColor = "white";
  storage.style.animation = "";

  commandCentre.innerHTML = "";
  commandCentre.style.opacity = "0";
  commandCentre.style.borderColor = "white";
  commandCentre.style.animation = "";

  commonRoom.innerHTML = "";
  commonRoom.style.opacity = "0";
  commonRoom.style.borderColor = "white";
  commonRoom.style.animation = "";

  showerFacilities.innerHTML = "";
  showerFacilities.style.opacity = "0";
  showerFacilities.style.borderColor = "white";
  showerFacilities.style.animation = "";

  sleepingQuarters.innerHTML = "";
  sleepingQuarters.style.opacity = "0";
  sleepingQuarters.style.borderColor = "white";
  sleepingQuarters.style.animation = "";

  fitnessFacilities.innerHTML = "";
  fitnessFacilities.style.opacity = "0";
  fitnessFacilities.style.borderColor = "white";
  fitnessFacilities.style.animation = "";
}

function visualizeMap(n, dataset) {
  // let n = datapointSlider.value - 1;

  // ROOM 1
  // green if there are both habitants and predicted habitatns
  if (
    dataset[n].room1.habitants.length >= 1 &&
    dataset[n].room1.predictedHabitants.length >= 1
  ) {
    commandCentre.style.opacity = "1";
    commandCentre.style.borderColor = "green";
  }

  // red if there are only habitants and 0 predicted habitants
  else if (
    dataset[n].room1.habitants.length >= 1 &&
    dataset[n].room1.predictedHabitants.length == 0
  ) {
    commandCentre.style.opacity = "1";
    commandCentre.style.borderColor = "red";
    commandCentre.style.animation = "blinker 3s linear infinite";
  }

  // flashing green if there are only predicted habitants?
  else if (
    dataset[n].room1.habitants.length == 0 &&
    dataset[n].room1.predictedHabitants.length >= 1
  ) {
    commandCentre.style.opacity = "1";
    commandCentre.style.borderColor = "green";
    commandCentre.style.animation = "blinker 3s linear infinite";
  } else {
    commandCentre.style.opacity = "0";
    commandCentre.style.borderColor = "white";
  }

  // ROOM 2
  // green if there are both habitants and predicted habitatns
  if (
    dataset[n].room2.habitants.length >= 1 &&
    dataset[n].room2.predictedHabitants.length >= 1
  ) {
    fitnessFacilities.style.opacity = "1";
    fitnessFacilities.style.borderColor = "green";
  }

  // red if there are only habitants and 0 predicted habitants
  else if (
    dataset[n].room2.habitants.length >= 1 &&
    dataset[n].room2.predictedHabitants.length == 0
  ) {
    fitnessFacilities.style.opacity = "1";
    fitnessFacilities.style.borderColor = "red";
    fitnessFacilities.style.animation = "blinker 3s linear infinite";
  }

  // flashing green if there are only predicted habitants?
  else if (
    dataset[n].room2.habitants.length == 0 &&
    dataset[n].room2.predictedHabitants.length >= 1
  ) {
    fitnessFacilities.style.opacity = "1";
    fitnessFacilities.style.borderColor = "green";
    fitnessFacilities.style.animation = "blinker 3s linear infinite";
  } else {
    fitnessFacilities.style.opacity = "0";
    fitnessFacilities.style.borderColor = "white";
  }

  // ROOM 3
  // green if there are both habitants and predicted habitatns
  if (
    dataset[n].room3.habitants.length >= 1 &&
    dataset[n].room3.predictedHabitants.length >= 1
  ) {
    researchFacility1.style.opacity = "1";
    researchFacility1.style.borderColor = "green";
  }

  // red if there are only habitants and 0 predicted habitants
  else if (
    dataset[n].room3.habitants.length >= 1 &&
    dataset[n].room3.predictedHabitants.length == 0
  ) {
    researchFacility1.style.opacity = "1";
    researchFacility1.style.borderColor = "red";
    researchFacility1.style.animation = "blinker 3s linear infinite";
  }

  // flashing green if there are only predicted habitants?
  else if (
    dataset[n].room3.habitants.length == 0 &&
    dataset[n].room3.predictedHabitants.length >= 1
  ) {
    researchFacility1.style.opacity = "1";
    researchFacility1.style.borderColor = "green";
    researchFacility1.style.animation = "blinker 3s linear infinite";
  } else {
    researchFacility1.style.opacity = "0";
    researchFacility1.style.borderColor = "white";
  }

  // ROOM 4
  // green if there are both habitants and predicted habitatns
  if (
    dataset[n].room4.habitants.length >= 1 &&
    dataset[n].room4.predictedHabitants.length >= 1
  ) {
    commonRoom.style.opacity = "1";
    commonRoom.style.borderColor = "green";
  }

  // red if there are only habitants and 0 predicted habitants
  else if (
    dataset[n].room4.habitants.length >= 1 &&
    dataset[n].room4.predictedHabitants.length == 0
  ) {
    commonRoom.style.opacity = "1";
    commonRoom.style.borderColor = "red";
    commonRoom.style.animation = "blinker 3s linear infinite";
  }

  // flashing green if there are only predicted habitants?
  else if (
    dataset[n].room4.habitants.length == 0 &&
    dataset[n].room4.predictedHabitants.length >= 1
  ) {
    commonRoom.style.opacity = "1";
    commonRoom.style.borderColor = "green";
    commonRoom.style.animation = "blinker 3s linear infinite";
  } else {
    commonRoom.style.opacity = "0";
    commonRoom.style.borderColor = "white";
  }

  // ROOM 5
  // green if there are both habitants and predicted habitatns
  if (
    dataset[n].room5.habitants.length >= 1 &&
    dataset[n].room5.predictedHabitants.length >= 1
  ) {
    sleepingQuarters.style.opacity = "1";
    sleepingQuarters.style.borderColor = "green";
  }

  // red if there are only habitants and 0 predicted habitants
  else if (
    dataset[n].room5.habitants.length >= 1 &&
    dataset[n].room5.predictedHabitants.length == 0
  ) {
    sleepingQuarters.style.opacity = "1";
    sleepingQuarters.style.borderColor = "red";
    sleepingQuarters.style.animation = "blinker 3s linear infinite";
  }

  // flashing green if there are only predicted habitants?
  else if (
    dataset[n].room5.habitants.length == 0 &&
    dataset[n].room5.predictedHabitants.length >= 1
  ) {
    sleepingQuarters.style.opacity = "1";
    sleepingQuarters.style.borderColor = "green";
    sleepingQuarters.style.animation = "blinker 3s linear infinite";
  } else {
    sleepingQuarters.style.opacity = "0";
    sleepingQuarters.style.borderColor = "white";
  }
}

function updateMap(n, dataset) {
  const title = document.querySelector(".datapointTitle");
  let newTitle = "Timestamp " + dataset[n].startDate;
  title.innerText = newTitle;

  roomOne(n, dataset);
  roomTwo(n, dataset);
  roomThree(n, dataset);
  roomFour(n, dataset);
  roomFive(n, dataset);
}

// room functions
function roomOne(n, dataset) {
  let roomHabitants = dataset[n].room1.habitants;
  let roomPredictedHabitants = dataset[n].room1.predictedHabitants;

  // console.log("habitants room 1", roomHabitants);
  // console.log("predicted habitants room 1", roomPredictedHabitants);

  roomHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("habitant");

    commandCentre.appendChild(habitantDiv);
  });

  roomPredictedHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("predictedHabitant");

    commandCentre.appendChild(habitantDiv);
  });
}

function roomTwo(n, dataset) {
  let roomHabitants = dataset[n].room2.habitants;
  let roomPredictedHabitants = dataset[n].room2.predictedHabitants;

  // console.log("habitants room 2", roomHabitants);
  // console.log("predicted habitants room 2", roomPredictedHabitants);

  roomHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("habitant");

    fitnessFacilities.appendChild(habitantDiv);
  });

  roomPredictedHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("predictedHabitant");

    fitnessFacilities.appendChild(habitantDiv);
  });
}

function roomThree(n, dataset) {
  let roomHabitants = dataset[n].room3.habitants;
  let roomPredictedHabitants = dataset[n].room3.predictedHabitants;

  // console.log("habitants room 3", roomHabitants);
  // console.log("predicted habitants room 3", roomPredictedHabitants);

  roomHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("habitant");

    researchFacility1.appendChild(habitantDiv);
  });

  roomPredictedHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("predictedHabitant");

    researchFacility1.appendChild(habitantDiv);
  });
}

function roomFour(n, dataset) {
  let roomHabitants = dataset[n].room4.habitants;
  let roomPredictedHabitants = dataset[n].room4.predictedHabitants;

  roomHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("habitant");

    commonRoom.appendChild(habitantDiv);
  });

  roomPredictedHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("predictedHabitant");

    commonRoom.appendChild(habitantDiv);
  });
}

function roomFive(n, dataset) {
  let roomHabitants = dataset[n].room5.habitants;
  let roomPredictedHabitants = dataset[n].room5.predictedHabitants;

  roomHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("habitant");

    sleepingQuarters.appendChild(habitantDiv);
  });

  roomPredictedHabitants.forEach((e) => {
    const habitantDiv = document.createElement("div");
    habitantDiv.classList.add("predictedHabitant");

    sleepingQuarters.appendChild(habitantDiv);
  });
}
