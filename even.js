const isEven = function (num){

  return num % 2 === 0;

}

const tenIsEven = isEven(10); // check
const elevenIsEven = isEven(11); // check

// return statement & also pass the result returned by isEven directly to the console.log which will take and output the value to terminal
console.log(isEven(10)); // result of true
console.log(isEven(11)); // result of false

/* return statement
console.log(tenIsEven); // result of true
console.log(elevenIsEven); // result of false
*/