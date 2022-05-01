//   --﷽--

// selecting all necessary dom element

// related with navigation
const navigation = document.querySelector(".navigation");
const menuBar = document.querySelector("#menu-bar");
const navlinks = document.querySelectorAll(".navigation ul li a");

// related with section
const section = document.querySelectorAll("section");

// controlling navigation menu
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  menuBar.classList.toggle("fa-times");
  navigation.classList.toggle("active");
});

// scroll event handling
document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navigation.classList.remove("active");

  // connect link when scroll
  connectWithNavlink();
});

function connectWithNavlink() {
  let current = "";

  section.forEach((element) => {
    const top = window.scrollY;
    const height = element.offsetHeight;
    const offset = element.offsetTop - 150;

    if (top >= offset && top < offset + height) {
      current = element.getAttribute("id");
    }
  });

  navlinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// happy coding!!!!
// this project made by Fahad at 1st May, 2022.
