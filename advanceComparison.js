const myMoney = 50;
const friendMoney = '50';

console.log("Money Comparison: ");
// Using == and === to compare values

console.log(myMoney == friendMoney);
console.log(myMoney === friendMoney);

console.log("String Comparison: ");
// Using == and === to compare strings

console.log("JavaScript" == 'JavaScript');
console.log("JavaScript" === 'JavaScript');
//Cause both are same strings and data type

console.log("Number and String Comparison: ");
// Using == and === to compare number and string

console.log(25 == "25");
console.log(25 === "25");
// For == both are same numbers
// For === data types are not same

console.log("Same Variable Comparison: ");
// Using == and === to compare same variable

const varName = "apple";
console.log(varName == varName);
console.log(varName === varName);

console.log("Uppercase and Lowercase Comparison: ");
// Using == and === to compare uppercase and lowercase strings

console.log("test" == "TEST");
console.log("test" === "TEST");

console.log("Not Equal Comparison: ");
// Using != and !== to compare values

const variableX = 15;
const variableY = "20";
console.log(variableX != variableY);
console.log(variableX !== variableY);

console.log("String Case Sensitivity Comparison: ");
// Using == and === to compare strings with different cases

const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);