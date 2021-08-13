// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
function objList(obj) {
  return Object.keys(obj);
}
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
// console.log(objList(student))

//  2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

function delKey(obj) {
  const orgObj = obj;
  const copyObj = { ...obj };
  delete copyObj.rollno;
  return { orgObj, copyObj };
}
// console.log(delKey(student));
// const copyObj = { ...student };
// delete copyObj.rollno;
// console.log(student, copyObj)

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

function objLength(obj) {
  return Object.keys(obj).length;
}
// console.log(objLength(student))

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// for (const key in library) {
//   let author = library[key]["author"];
//   let book = library[key]["title"];
//   let status = library[key]["readingStatus"];
//   console.log( `Author: ${author}\nBook: ${book}\nStatus: ${status}`);
// }

//Alternative:
function status(list) {
  for (const key in list) {
    let author = list[key]["author"];
    let book = list[key]["title"];
    let status = list[key]["readingStatus"];
    console.log(`Author: ${author}\nBook: ${book}\nStatus: ${status}`);
  }
}

// console.log(status(library));

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

//constructor fn
function Cylinder(r, h) {
  this.r = r;
  this.h = h;
}

function cyVol(obj) {
  let vol = Math.PI * (obj.r * obj.r) * obj.h;
  return vol;
}

const myCylinder = new Cylinder(5, 10);
// console.log(cyVol(myCylinder));

// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
// Expected Output: [[object Object] { author: "Steve Jobs", libraryID: 4264, title:  "Walter Isaacson" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "Bill Gates" , libraryID: 1254, title: "The Road Ahead" }]

var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function sortIt(x, y) {
  if (x.libraryID > y.libraryID) {
    return -1;
  }
  if (x.libraryID < y.libraryID) {
    return 1;
  }
  return 0;
}

console.log(library.sort(sortIt));
