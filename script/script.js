window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-nav").classList.add("scrolled-nav");
    document.getElementById("main-nav").classList.remove("myNav");
  } else {
    document.getElementById("main-nav").classList.remove("scrolled-nav");
    document.getElementById("main-nav").classList.add("myNav");
  }
}


 