function drop() {
    document.querySelector(".drop__content").classList.add("drop__content__activ");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.drop__button') && !event.target.matches('.drop__button__content') && !event.target.matches('.drop__button__element')) {
      var dropdowns = document.getElementsByClassName("drop__content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('drop__content__activ')) {
          openDropdown.classList.remove('drop__content__activ');
        }
      }
    }
  }