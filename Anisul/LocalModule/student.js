// Normal/traditional Function in JavaScript
// function GetName(){
//     return "Shawon";
// }

// Arrow Function in JS
const getName = () => {
  return "SR Shawon";
};
const getAge = () => {
  return "30";
};
const cgpa = 3.95;

// exports.name = getName;
// exports.age = getAge;
// exports.result = cgpa;

module.exports = {
    getName,
    getAge,
    cgpa
}