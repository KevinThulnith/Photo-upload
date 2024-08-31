let input = document.getElementById("image_input");
let inputDisplay = document.querySelector(".display");
let hddr = document.querySelector("header");
let imageInput = "";

input.addEventListener("change", function () {
  hddr.classList.add("pop");
  const render = new FileReader();
  render.addEventListener("load", () => {
    imageInput = render.result;
    inputDisplay.style.backgroundImage = "url(" + imageInput + ")";
  });
  render.readAsDataURL(this.files[0]);
});
