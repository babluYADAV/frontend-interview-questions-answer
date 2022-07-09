var thisIsObject = {
  Cow: "Moo",
  Cat: "Meow",
  Dog: "Bark",
};
// thisIsObject = Object.keys(thisIsObject)
//   .filter((key) => key !== "cow")
//   .reduce((obj, key) => {
//     obj[key] = thisIsObject[key];
//     return obj;
//   }, {});

 
delete thisIsObject["Cow"];
delete thisIsObject.Cat
console.log(thisIsObject)
