let number = 35;
let message = ["Divisible by both", "Divisible by 2", "Divisible by 3", "Not divisible by 2 or 3"]
let response = "";
if (number % 2 == 0 && number % 3 == 0){
    response = message[0]
}
else if (number % 2 == 0){
    response = message[1]
}
else if (number % 3 == 0){
    response = message[2]
}
else if (number % 2 != 0 || number % 3 != 0){
    response = message[3]
}
console.log(response)

switch (number) {
    case 1:
        response = message[0];
        break;
    case 2:
        response = message[1];
        break;
    case 3:
        response = message[2];
        break;
    case 4:
        response = message[3];
        break;
}

console.log(response);