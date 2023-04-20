document.querySelector("#search").oninput = function () {
  let value = this.value.trim();
  let elItem = document.querySelectorAll(".doctor__container .doctor__block");
  console.log(value);
  console.log(elItem);
  if (value != "") {
    for (let i of elItem) {
      console.log(i.children[1].innerText);
      if (i.children[1].innerText.toLowerCase().search(value) === -1) {
        i.classList.add("hide");
      } else {
        i.classList.remove("hide");
      }
    }
  } else {
    for (let i of elItem) {
      i.classList.remove("hide");
    }
  }
};
