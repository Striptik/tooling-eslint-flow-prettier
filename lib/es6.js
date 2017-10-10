const hello = name => {
  console.log(`COUCOU ${name} !`);
};

class Human {
  constructor(age = 0, name = "John DOE") {
    this.age = age;
    this.name = name;
    this.sayHello();
  }

  sayHello() {
    hello(this.name);
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

new Robin();

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