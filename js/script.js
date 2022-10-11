let inpEl = document.querySelector(".inp");
let btnEl = document.querySelector(".btn");
let h1El = document.querySelector(".h1");
let array = [];

inpEl.addEventListener('input', () => {
  localStorage.setItem("text", JSON.stringify(inpEl.value));
  h1El.innerHTML = localStorage.getItem("text");

})

btnEl.addEventListener('click', () => {
  localStorage.clear();
  inpEl.value = '';
  h1El.innerHTML = '';
})
