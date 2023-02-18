const reverseString = function(inputString) {

    const arr = inputString.split("");
    let reverse = "";
    console.log(arr);

    while(arr.length !== 0) {
        reverse = reverse.concat(arr.pop());
    }
    return reverse;
};
reverseString("omega");
// Do not edit below this line
module.exports = reverseString;