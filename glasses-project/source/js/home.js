//  --﷽--

// selecting all necessary dom element
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev-slide");
const next = document.querySelector("#next-slide");
const indicator = document.querySelector(".dot-indicator");

const sLen = slides.length;
let index = 0;

// ---home page slider code---

// auto play function
const autoplay = () => {
  nextSlide();
  updateDotIndicator();
};

// nextSlide function
const nextSlide = () => {
  if (index === sLen - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
};

// previousSlide function
const previousSlide = () => {
  if (index === 0) {
    index = sLen - 1;
  } else {
    index--;
  }

  changeSlide();
};

// changeSlide function
const changeSlide = () => {
  slides.forEach((element) => {
    element.classList.remove("active");
  });

  slides[index].classList.add("active");
};

// resetTimer function
const resetTimer = () => {
  clearInterval(timer);
  timer = setInterval(autoplay, 8000);
};

// dotIndicator function
const dotIndicator = () => {
  slides.forEach((element, index) => {
    const dotDiv = document.createElement("div");

    dotDiv.addEventListener("click", () => {
      indicateSlide(dotDiv);
    });

    dotDiv.id = index;
    if (index === 0) {
      dotDiv.className = "active";
    }

    indicator.appendChild(dotDiv);
  });
};

// indicateSlide function
const indicateSlide = (element) => {
  index = element.id;
  changeSlide();
  updateDotIndicator();
  resetTimer();
};

// updateDotIndicator function
const updateDotIndicator = () => {
  const dotLen = indicator.children.length;

  for (let i = 0; i < dotLen; i++) {
    indicator.children[i].classList.remove("active");
  }

  indicator.children[index].classList.add("active");
};

// window load event
document.addEventListener("DOMContentLoaded", () => {
  dotIndicator();
});

// autoPlay initialigation
let timer = setInterval(autoplay, 8000);

// adding listener for previous button
prev.addEventListener("click", () => {
  previousSlide();
  updateDotIndicator();
  resetTimer();
});

// adding listener for next button
next.addEventListener("click", () => {
  nextSlide();
  updateDotIndicator();
  resetTimer();
});

// happy coding !!!!
// this project made by Fahad at 10th May, 2022.
