let temperature = 20;
//let message = "";
let message = ["It's freezing!", "It's cold.", "It's mild.", "It's warm"]
let value = ""

if (temperature < 0){
    value = message[0]
}else if (temperature >= 0 && temperature <= 15){
    value = message[0]
}else if (temperature >= 16 && temperature <= 25){
    value = message[0]
}else{
    value = message[0]
}
console.log(value)

switch(temperature){
    case (temperature < 0):
        value = message[0]
    case (temperature >= 0 && temperature <= 15):
        value = message[1]
    case (temperature >= 16 && temperature <= 25):
        value = message[2]
    default: 
        value = message[3]
}
console.log(value)