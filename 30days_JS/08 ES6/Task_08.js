let name = "JS";
let age = 30;

function greet() {
  console.log(`My name is ${this.name} and my age os ${this.age}`);
}

let Obj = {
  name,
  age,
  greet,
};

console.log(Obj);
Obj.greet()