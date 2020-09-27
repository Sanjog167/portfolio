// $(document).ready(function () {
//   $(".bar").on("click", function () {
//     $(".bar").toggleClass("open");
//     $(".top-nav").toggleClass("open");
//   });

// $(document).ready(function(){
// const navList = document.querySelector('nav-list');
// const hamburgerMenu = document.querySelector('.hamburger-menu');
// });

const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

let $btns = $(".project-area .button-group button");

$btns.click(function (e) {
  $(".project-area .button-group button").removeClass("active");
  e.target.classList.add("active");

  let selector = $(e.target).attr("data-filter");
  $(".project-area .grid").isotope({
    filter: selector,
  });

  return false;
});

$(".project-area .button-group #btn1").trigger("click");

/*------------------
      Preloader
  --------------------*/
