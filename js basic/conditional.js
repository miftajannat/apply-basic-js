// if(){

// }
// else{

// }

var biscutePrice = 8;
if (biscutePrice < 10) {
    console.log("I wil eat the biscuits");
}
else {
    console.log('Khali cha is better');
}

var student = 10;
if (student == 10) {
    console.log('You are a student');
}
else {
    console.log('You are not a student');
}

var student = 10;
if (student != 10) {
    console.log('You are a student');
}
else {
    console.log('You are not a student');
}


var jobPaiso = true;
var savingAmount = 500000;

if (jobPaiso == true && savingAmount > 200000) {
    console.log('Aso tomar patri khuji');
}
else {
    console.log('Tor kopale biya nai');
}

var jobPaiso = false;
var savingAmount = 500000;
if (jobPaiso == true || savingAmount > 200000) {
    console.log('Aso tomar patri khuji');
}
else {
    console.log('Tor kopale biya nai');
}

var jobPaiso = true;
var savingAmount = 50000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log('Aso tomar patri khuji');
}
else if (jobPaiso == true) {
    console.log('acha koi din pore dekhbo');
}
else {
    console.log('Tor kopale biya nai');
}

