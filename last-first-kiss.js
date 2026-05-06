function first(x) {
return x[0];

}
function last(x) {
return x[x.length-1]

}

function kiss (x) {
return [last(x),first(x)];
}

// Test first function
console.log(first([1, 2, 3]));  // 1
console.log(first("hello"));     // "h"

// Test last function
console.log(last([1, 2, 3]));   // 3
console.log(last("hello"));      // "o"

// Test kiss function
console.log(kiss([1, 2, 3]));   // [3, 1]
console.log(kiss("hello"));      // ["o", "h"]
