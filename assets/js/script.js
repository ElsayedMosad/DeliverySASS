// Header in scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
});

// Dark Mood Option
const changeTheme = document.getElementById("change-theme");

if (localStorage.mood == "dark") {
  document.body.classList.toggle("dark");
  changeTheme.classList.toggle("bx-toggle-right");
}

changeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  changeTheme.classList.toggle("bx-toggle-right");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mood", "dark");
  } else {
    localStorage.setItem("mood", "light");
  }
});
// open & close menu in small screen
const playMenu = (toggleId, menuId) => {
  const toggleNav = document.getElementById(toggleId),
    menuNav = document.getElementById(menuId);
  if (toggleNav && menuNav) {
    toggleNav.addEventListener("click", () => {
      menuNav.classList.toggle("show-menu");
    });
  }
};
playMenu("nav-toggle", "nav-menu");


// Remove target class and add to current index
function removeClass(ArrayOfElements, classTargetToRemove, newIndexForClass) {
  ArrayOfElements.forEach((element, index) => {
    if (element.classList.contains(classTargetToRemove)) {
      element.classList.remove(classTargetToRemove);
    }
    if (index === newIndexForClass) {
      element.classList.add(classTargetToRemove);
    }
  });
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (!e.classList.contains("active")) {
      removeClass(navLink, "active", i);
    }
  });
});

// Header scroll shadow and link scrollup

const sections = document.querySelectorAll(".section");
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((sec, index) => {
    if (
      scrollPosition + 200 >= sec.offsetTop &&
      scrollPosition <= sec.offsetTop + sec.offsetHeight + 200
    ) {
      navLink.forEach((e) => {
        if (e.classList.contains("active")) {
          e.classList.remove("active");
        }
      });
      navLink[index].classList.add("active");
    }
  });
  if (scrollPosition >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});
