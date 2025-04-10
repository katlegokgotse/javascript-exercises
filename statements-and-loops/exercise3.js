console.log("1. Print to 10 :")
for (let i = 1; i <= 10; i++){
    console.log(i + " ");
}
console.log("2. Even to 20:")
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0)
        console.log(i + " ");
    else 
        continue;
}
console.log("3. 1 to 100: ")
let total = 0;
for (let i = 1; i <= 100; i++){
    total += i
}
console.log(total)

console.log("Print array: ")
const number = [1, 2, 3, 4, 5]
for(let i = 0; i < number.length; i++){
    console.log(number[i])
}
console.log("Print largest num")
let numbers = [3, 7, 2, 5, 10.0, 6]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
numbers.sort()
console.log(`Largest num ${numbers[numbers.length - 1]}`);
