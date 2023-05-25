let numb = 10000;
let counter = 0;
do{
    numb /= 2;
    counter++;
}
while (numb >= 50);
let result = numb;
console.log("Result:" + result);
console.log("Count:" + counter);