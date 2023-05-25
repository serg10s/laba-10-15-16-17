let number = 0;

while (number <= 100) {
    let b = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            b = false;
            break;
        }
    }

    if (b) {
        console.log(number);
    }

    number++;
}