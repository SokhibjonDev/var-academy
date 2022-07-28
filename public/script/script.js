window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > 80) {
      document.querySelector(".Navbar").style.background =
        "rgba(0, 0, 0, 0.300)";
    } else {
      document.querySelector(".Navbar").style.background = "transparent";
    }
  }
);