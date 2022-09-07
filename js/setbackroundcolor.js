function out(any) {
  console.log(any)
}
out("I am in setbackroundcolor")

const inputColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")

out(inputColor)

const body = document.querySelector("body")
out(body)

function changeBodyColor() {
  let color = inputColor.value;
  const num = Number(color)
  out(color)
  body.style.backgroundColor = color;
}

pbSetColor.addEventListener('click', changeBodyColor)
