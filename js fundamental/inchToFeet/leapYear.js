// const year = 3566;
// console.log(3566 / 4);

// const year = 3566;
// console.log(3566 % 4);

// const year = 3947;
// let reminder = year % 4;
// console.log(reminder == 0);



function isLeapyar(year) {
    const reminder = year % 4;
    if (reminder == 0) {
        return true;
    } else {
        return false;
    }
}