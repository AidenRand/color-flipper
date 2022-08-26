let button = document.querySelector(".btn");
let text = document.querySelector(".text");

button.addEventListener("click", () => {
  let colorNum = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.background = "#" + colorNum;
  let color = (text.textContent = "#" + colorNum);
  return color;
});
