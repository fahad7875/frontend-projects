// selecting all necessary dom element
const menuIcon = document.querySelector("#menu");
const navigation = document.querySelector("#menu-bar");

// showNavigation function here
const showNavigation = () => {
  let exist = navigation.className;
  if (exist === "hidden") {
    navigation.classList.remove("hidden");
  } else {
    navigation.classList.add("hidden");
  }
};

// event listener here
menuIcon.addEventListener("click", showNavigation);

// happy coding
