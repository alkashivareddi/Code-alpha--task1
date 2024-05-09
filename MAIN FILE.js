const button = document.querySelector(".calculate-btn");
const userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
const ageInfo = document.querySelector(".age-info");

function getDaysInMonth(year, month) {
  return new Date(year, month, 0);
}

button.addEventListener("click", function () {
  const birthDate = new Date(userInput.value);
  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth();
  const y1 = birthDate.getFullYear();

  const today = new Date();
  const d2 = today.getDate();
  const m2 = today.getMonth();
  const y2 = today.getFullYear();

  let y3 = y2 - y1;
  let m3, d3;

  //Calculating Age
  if (m1 <= m2) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d1 <= d2) {
    d3 = d2 - d1;
  } else {
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  //Updating Age
  ageInfo.innerHTML = `Your age is <span class="years">${y3}</span> years
  <span class="months">${m3}</span> months and <span class="days">${d3}</span> days`;
});

//Handling the modal window
const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenModal.addEventListener("click", showModal);

btnCloseModal.addEventListener("click", hideModal);

overlay.addEventListener("click", hideModal);

//Handling ESc Keypress event
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    hideModal();
});