const reverseString = function(str) {
let splitString = str.split(""); // splitting the string

let reverseVal = splitString.reverse(); // reversing the value

let joinString = reverseVal.join("");

return joinString;
};

// Do not edit below this line
module.exports = reverseString;
