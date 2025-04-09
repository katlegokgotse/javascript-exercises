let value1 = 4;
let value2 = 5;
const result = value1 > value2 ? true : false;

let x = 12;
let y = 12;
const result2 = x <= y ? false : true;
const checkEquality = x == y ? true : false;

if (result2) {
  console.log("x is greater than y");
}else if(result2 == false){
    console.log('x is less than or equal to y');
}

if (checkEquality){
    console.log('x is equal to y');
}else{
    console.log('x is not equal to y');
}