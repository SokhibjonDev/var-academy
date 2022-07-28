window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.querySelector(".Navbar").style.background = "rgba(0, 0, 0, 0.300)";
  } else {
    document.querySelector(".Navbar").style.background = "transparent";
  }
});

let isbirnima = false;

setInterval(backSotF, 1000);
function backSotF() {
  if (!!isbirnima) {
    document.querySelector(".backSot").style.padding = "20px 15px";
  } else {
    document.querySelector(".backSot").style.padding = "15px";
  }
  isbirnima = !isbirnima;
}
