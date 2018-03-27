function questionMarks(str) {
    qMarks = 0;
    num1 = 0;
    num2 = 0;
    nums = "123456789";
    for (var i = 0; i < str.length; i++) {
        console.log("--", str[i])
        if (str[i] === "?" && qMarks < 3) {
            qMarks += 1;
        } else if (str[i] === "?" && qMarks > 3){
            qMarks = 0;
        } else if (str[i].indexOf(nums) > -1 && num1 === 0) {
            num1 = parseInt(str[i])
        } else if (str[i].indexOf(nums) > -1 && num1 > 0 && num2 === 0) {
            num2 = parseInt(str[i])
        } else if (str[i].indexOf(nums) > -1 && num1 > 0 && num2 > 0 ) {
            num1 = num2;
            num2 = parseInt(str[i])
        }

        if (num1 + num2 === 10 && qMarks === 3) {
            return true;
        }
    }
    console.log(qMarks, num1, num2);
    return false;
}

console.log(questionMarks("aa6?9"))
console.log(questionMarks("acc?7??sss?3rr1?????5"))