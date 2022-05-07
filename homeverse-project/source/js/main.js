//   --﷽--

// selecting all necessary dom element
const headerBottom = document.querySelector(".header-bottom");
const navigation = document.querySelector(".navigation");
const menuBar = document.querySelector("#menu-bar");
const closeMenu = document.querySelector("#close-menu");
const navLinks = document.querySelectorAll('.nav-item li a');
const section = document.querySelectorAll('section');

// header bottom position fixing
document.addEventListener("scroll", () => {
  hideNavigation();

  if (window.scrollY > 40) {
    headerBottom.classList.add("active");
  } else {
    headerBottom.classList.remove("active");
  }

  // connect link when scroll
  connectWithNavlink();
});

// listener for menu bar
menuBar.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  hideNavigation();
});

const hideNavigation = () => {
  let exist = navigation.classList.contains("active");
  if (exist) {
    navigation.classList.remove("active");
  }
};


// connect with navlink function

const connectWithNavlink = () => {
  let current = "";

  section.forEach((element) => {
    const top = window.scrollY;
    const height = element.offsetHeight;
    const offset = element.offsetTop - 150;

    if (top >= offset && top < offset + height) {
      current = element.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
}


// happy coding !!!!
// this project made by Fahad at 7th May, 2022 