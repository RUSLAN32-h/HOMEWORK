let message = "Hello";
let firstName = "Ruslan";
let myBirthday = "08.08.2006";
let age = "19";
let work = "coder";

console.log(message, firstName, myBirthday, age, work);

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ruslan"));

const numbers = [3, 12, 7, 18, 5, 25, 9, 14];

function Number(arrow) {
  for (let i = 0; i < arrow.length; i++) {
    if (arrow[i] > 10) {
      console.log(arrow[i]);
    }
  }
}

Number(numbers);

function calculator(num1, num2, operator) {
  if (operator === "plus") {
    return num1 + num2;
  } else if (operator === "minus") {
    return num1 - num2;
  } else if (operator === "multiply") {
    return num1 * num2;
  } else if (operator === "divide") {
    return num1 / num2;
  }
}

const result = calculator(2, 3, "minus");
console.log(result);

const users = [
  {
    id: 1,
    name: "Иван",
    age: 25,
    isAdmin: false
  },
  {
    id: 2,
    name: "Мария",
    age: 30,
    isAdmin: true
  },
  {
    id: 3,
    name: "Петр",
    age: 22,
    isAdmin: false
  },
  {
    id: 4,
    name: "Анна",
    age: 28,
    isAdmin: false
  },
  {
    id: 5,
    name: "Сергей",
    age: 35,
    isAdmin: true
  }
];

let  UsersCount = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
     UsersCount++;
  }
}

console.log("Количество простых пользователей: " +  UsersCount);


