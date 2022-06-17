// filter() method - creates an array filled with all array elements that pass a test (provided as a function)

const numbers = [2, 3, 4, 6];

// const filtered = numbers.filter(function(value) {
//     return value >= 3;
// })

console.log(numbers);
// const filtered = numbers.filter(value => value >= 3);
const filtered = numbers.filter(value => (value % 3 == 0));

console.log(numbers);
console.log(filtered);