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
