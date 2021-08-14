// 1. Create 2 object and try to use call, apply and bind on them
const person = {
  firstName: "Sobhan",
  lastName: "Dash",
  getName: function (fn, ln) {
    console.log(fn + " " + ln);
  },
};

const person2 = {
  firstName: "Edward",
  lastName: "Xavier",
};

const person3 = {
  firstName: "Neo",
  lastName: "Kaizer",
};
//call()
person.getName.call(person2, person2.firstName, person2.lastName);
//apply()
person.getName.apply(person3, [person3.firstName, person3.lastName]);
//bind()
const binder = person.getName.bind(person, person.firstName, person.lastName);
binder();


