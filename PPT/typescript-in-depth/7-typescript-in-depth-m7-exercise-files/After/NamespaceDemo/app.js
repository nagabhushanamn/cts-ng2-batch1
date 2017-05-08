/// <reference path="utilityFunctions.ts" />
var util = Utility.Fees;
var fee = util.CalculateLateFee(10);
console.log("Fee: " + fee);
