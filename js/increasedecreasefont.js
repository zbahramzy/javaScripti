function out(any) {
  console.log(any)
}
out("I am in increasedecreasefont")

const pbIncrease = document.querySelector(".pbIncrease")
const pbDecrease = document.querySelector(".pbDecrease")

const lineFirst = document.querySelector(".first")

out(lineFirst)
out("fontsize =" + lineFirst.style.fontSize)
lineFirst.style.fontSize = '30px'
out("fontsize =" + lineFirst.style.fontSize)

let fontsize = 10;

function increaseFontSize(button) {
  out(button)
  fontsize++
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}

function decreaseFontSize(button1) {
  out(button1)
  fontsize--
  out("fontsize = " + lineFirst.style.fontSize)
  lineFirst.style.fontSize = fontsize + 'px'
}

//pbIncrease.addEventListener('click', () => increaseFontSize())
//pbIncrease.addEventListener('click', (button) => increaseFontSize())

function testKeyPressed(event) {
  //out(event)
  //out(event.key)
  let k = event.key
  if(k == 'd') {
    out("dummy")
  }
}

pbIncrease.addEventListener('click', increaseFontSize)
pbIncrease.addEventListener('click', decreaseFontSize)

document.addEventListener('keydown', e => testKeyPressed(e))
