const input = require('sync-input');
let i = 1
do{
    console.log(i)
    i++;
}while( i <= 10)

let total = 0
let x = 1
do{
    total += x;
    x++;
}
while (x <= 100)
console.log(`Sum of 1 to 100 ${total}`)

let number;
do {
    number = Number(input("Enter a number "));
} while (isNaN(number) || number >= 10 && number != null);

console.log("You entered a valid number greater than 10:", number);
