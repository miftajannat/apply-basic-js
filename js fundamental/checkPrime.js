var n = 18;
for (i = 2; i < n - 1; i++) {
    console.log(n / i);
}

var n = 18;
for (i = 2; i < n - 1; i++) {
    console.log(i, n / i);
}

var n = 18;
for (i = 2; i < n - 1; i++) {
    console.log(i, n % i);
}

var n = 18;
for (i = 2; i < n - 1; i++) {
    console.log(i, n % i);
    if (n % i == 0) {
        console.log('Not a prime number');

    }

}


var n = 79;
for (i = 2; i < n - 1; i++) {
    console.log(i, n % i);
    if (n % i == 0) {
        console.log('Not a prime number');
        break;
    }

}

function isPrime(n) {
    for (i = 2; i < n - 1; i++) {

        if (n % i == 0)
            return 'Not a prime number';
    }
    return 'Your number is a prime number';

}
var result = isPrime(79);
console.log(result);