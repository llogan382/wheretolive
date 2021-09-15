const array = ['Guilford county, NC', null, null, 37, 143]
const amtToRemove = array.length - 3
const newArray = array.splice(1, amtToRemove)

const average = (someArray) =>
  someArray.reduce((a, b) => a + b, 0) / someArray.length

// I have an array
// I want to put parts [1] to [-3] in a new array
console.log(newArray)
console.log(average(newArray))
