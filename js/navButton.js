(function () {
  var toggle = document.querySelector(".nav-toggle");
  let navMenu = document.querySelector(".navigation");
  toggle.addEventListener("click", function (e) {
    this.classList.toggle("opened");
    navMenu.classList.toggle("navigation__visibility");
  });
})();
