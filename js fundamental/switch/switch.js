// num = 5
// if (num > 1000) { }
// else if (num === 100) { }
// else if (num > 50) { }
// else if (num > 20) { }
// else if (num > 10) { }
// else if (num > 5) { }
// else if (num > 2) { }
// else if (num > 0) { }
// else { }


num = 5
switch (num) {
    case 1000:
        console.log("num is 1000");
        break;
    case 100:
        console.log("num is 100");
        break;

    case 20:
    case 10:
        console.log("num is 10 or 20");
        break;
    default:
        console.log("num is not 1000, 100, 20 or 10");
}
