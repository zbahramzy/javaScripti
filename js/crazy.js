console.log("I am in crazy");

function out(any) {
  console.log(any)
}

function sum(x, y) {
  return x + y
}

const a = 5
console.log(a)
let b = 6
console.log(b)
b = "hello"
console.log(b)

out(sum(5,6))
out(sum(5,"hello"))
out(sum(4>3,"hello"))
out(sum(3>4, "hello"))
out(sum(5.5, "hello"))

const c = 0/0;
let d = c + 5;
let e = null
let f

out(c)
out(f)

out()

out(sum(c, f))
out(sum(f, c))




