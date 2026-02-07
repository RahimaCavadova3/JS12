function menuOpen() {
  let menubar = document.getElementById("menubar");
  if (menubar.style.right === "-100%") {
    menubar.style.right = 0;
    menubar.classList.add("menuOpen");
  } else {
    menubar.style.right = "-100%";
  }
}
