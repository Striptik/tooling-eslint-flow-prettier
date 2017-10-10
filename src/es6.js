const hello = (name, age) => {
  console.log(`COUCOU ${name} and I am ${age} years old !`);
};

const coucou = ['hello', 'hi',];

class Human {
  constructor(age = 0, name = "John DOE") {
    this.age = age;
    this.name = name;
    this.sayHello();
    this.name = "bien ou quoi ?";
  }

  sayHello() {
    hello(this.name, this.age);
  }
}

class Robin extends Human {
  constructor() {
    super(23, "Robin");
    if (1 === 0) {
      console.log("JAMAIS !");
    }
  }
}
//////
// new Robin();
//
// //es5
// function sum (a, b) {
//   return a + b;
// }
//
// //es6 easy
// const sum = (a, b) => {
//   return a + b;
// };

//es6 bg
const sum = (a, b) => a + b;

sum(19 + 21);
