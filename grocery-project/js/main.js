// selecting all necessary dom element
const menuBar = document.querySelector("#menuBar");
const menuBarIcon = document.querySelector("#menuBar i");
const navBar = document.querySelector(".nav-bar");
const navHeader = document.querySelector("#navigation-header");
const form = document.querySelectorAll(".contact-form");

// set initial date
let countDate = new Date("april 15, 2022 00:00:00").getTime();

// event listener for menuBar
menuBar.addEventListener("click", () => {
  menuBarIcon.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

// event listener for scrolling work
window.onscroll = () => {
  menuBarIcon.classList.remove("fa-times");
  navBar.classList.remove("active");

  if (window.scrollY > 150) {
    navHeader.classList.add("active");
  } else {
    navHeader.classList.remove("active");
  }
};

// coundown function
const coundown = () => {
  let currentDate = new Date().getTime();
  let passedTime = currentDate - countDate;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let passedDay = Math.floor(passedTime / day);
  let passedHour = Math.floor((passedTime % day) / hour);
  let passedMinute = Math.floor((passedTime % hour) / minute);
  let passedSecond = Math.floor((passedTime % minute) / second);

  // calling checkup function for check and displaying properly
  checkup(passedDay, "day");
  checkup(passedHour, "hour");
  checkup(passedMinute, "minute");
  checkup(passedSecond, "second");
};

// checkup function
const checkup = (value, selector) => {
  const timeContent = document.querySelector("#countdown");

  if (value >= 10) {
    timeContent.querySelector(`.${selector}`).innerHTML = value;
  } else {
    timeContent.querySelector(`.${selector}`).innerHTML = `0${value}`;
  }
};

// load event listener
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    coundown();
  }, 1000);
});

// form event listener
form.forEach((element) => {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

//  Happy coding!!!! 
//  This project is made by Fahad at 16 April, 2022 .