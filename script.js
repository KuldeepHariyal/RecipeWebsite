const menu_btn = document.querySelector(".ri-menu-line");
const menu_close_btn = document.querySelector(".ri-close-line");
const search_btn = document.querySelector(".ri-search-2-line");
const search_close = document.querySelector(".ri-close-fill");
const nav_menu = document.querySelector(".navbar");
const search_result = document.querySelector(".search_result");
const Recipe_boxes = document.querySelector(".Recipe-container");

menu_btn.addEventListener("click", () => {
  nav_menu.classList.add("nav_menu_active");
});
menu_close_btn.addEventListener("click", () => {
  nav_menu.classList.remove("nav_menu_active");
});
search_btn.addEventListener("click", () => {
  nav_menu.classList.add("search_active");
});
search_close.addEventListener("click", () => {
  nav_menu.classList.remove("search_active");
});

const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

var initialItemCount = Math.ceil(
  document.querySelectorAll(".boxes").length / 2
);

function showItems() {
  var boxes = document.querySelectorAll(".boxes");
  for (var i = 0; i < boxes.length; i++) {
    if (i < initialItemCount) {
      boxes[i].style.display = "block";
    } else {
      boxes[i].style.display = "none";
    }
  }
}
window.onload = function () {
  showItems();
};

var boxes = document.querySelectorAll(".boxes");
var initialItemCount = Math.ceil(boxes.length / 2);

function updateButtonsVisibility() {
  var visibleBoxes = document.querySelectorAll(
    '.boxes[style="display: block;"]'
  ).length;
  var showMoreBtn = document.querySelector(".showMore-btn");
  var showLessBtn = document.querySelector(".showLess-btn");

  if (visibleBoxes < boxes.length) {
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "none";
    showLessBtn.style.display =
      visibleBoxes > initialItemCount ? "block" : "none";
  }
}

function showItems() {
  for (var i = 0; i < boxes.length; i++) {
    if (i < initialItemCount) {
      boxes[i].style.display = "block";
    } else {
      boxes[i].style.display = "none";
    }
  }
  updateButtonsVisibility();
}

function showMore() {
  for (var i = initialItemCount; i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
  updateButtonsVisibility();
}

function showLess() {
  for (var i = initialItemCount; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }
  updateButtonsVisibility();
}

function search() {
  var searchInput = document
    .getElementById("search-items")
    .value.trim()
    .toLowerCase();
    var mainContainer = document.getElementById("Recipes");

  for (var i = 0; i < boxes.length; i++) {
    var boxTitle = boxes[i].querySelector("h2").innerText.toLowerCase();
    if (boxTitle.includes(searchInput)) {
      boxes[i].style.display = "block";
    } else {
      boxes[i].style.display = "none";
    }
  }

  updateButtonsVisibility();
  mainContainer.scrollIntoView({
    behavior: "smooth"
});
}

function clearSearch() {
  var searchInput = document.getElementById("search-items");
  searchInput.value = "";
  showItems();
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting the traditional way

  // Open "popup.html" in a new tab
  window.open("./popup.html", "_blank");

  // Reset the form fields
  document.getElementById("myForm").reset();
});
