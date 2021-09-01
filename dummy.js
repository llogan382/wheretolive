let array = ['Guilford county, NC', 27, 52, 83, 37, 143];
const amtToRemove = array.length - 3;
let newArray = array.splice(1, amtToRemove);

const average = newArray => newArray.reduce((a,b) => a + b, 0)/ newArray.length;


// I have an array
// I want to put parts [1] to [-3] in a new array
console.log(newArray);
console.log(average(newArray));

