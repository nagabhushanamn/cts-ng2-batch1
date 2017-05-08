var Utility;
(function (Utility) {
    function CalculateLateFee(daysLate) {
        return daysLate * .25;
    }
    Utility.CalculateLateFee = CalculateLateFee;
    function MaxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
})(Utility || (Utility = {}));
// let fee = Utility.CalculateLateFee(5);
// console.log(`Fee: ${fee}`); 
//# sourceMappingURL=utilityFunctions.js.map