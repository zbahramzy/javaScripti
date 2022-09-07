function out(any) {
  console.log(any)
}
out("I am in setbackroundcolor")

const inputColor = document.querySelector(".getColor")
const pbSetColor = document.querySelector(".pbSetColor")
const pbSetColorNumber = document.querySelector(".pbSetColorNumber")

out(inputColor)

const body = document.querySelector("body")
out(body)

function changeBodyColor() {
  let color = inputColor.value;
  out(color)
  body.style.backgroundColor = color;
}

function changeBodyColorNumber() {
  let color = inputColor.value;
  const number = Number(color)
  const numberHex = parseInt(color, 16)
  out(number)
  out(numberHex)
  const hexColor = new Number(numberHex).toString(16)
  if (hexColor.length == 2) {hexcol = "0000" + hexColor}
  if (hexColor.length == 4) {hexcol = "00" + hexColor}
  out(hexColor)
  body.style.backgroundColor = "#" + hexColor
}

function changeBodyColorKey(key) {
  out(key)
  changeBodyColorNumber();
}

pbSetColor.addEventListener('click', changeBodyColor)
pbSetColorNumber.addEventListener('click', changeBodyColorNumber)
inputColor.addEventListener('input', changeBodyColorKey)
