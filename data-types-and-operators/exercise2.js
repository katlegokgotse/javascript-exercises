let value1 = 4;
let value2 = 5;
const result = value1 > value2 ? true : false;

function comparisonOperators(x, y) {
    const result = x <= y ? false : true;
    const checkEquality = x == y ? true : false;
    
    if (result) {
      console.log("x is greater than y");
    }else if(result == false){
        console.log('x is less than or equal to y');
    }
    
    if (checkEquality){
        console.log('x is equal to y');
    }else{
        console.log('x is not equal to y');
    }
}
function logicalOperators(a, b){
    const result = a && b; 
    const result2 = a || b;
    const result3 = !a;
    console.log('Logical AND:', result);
    console.log('Logical OR:', result2);
    console.log('Logical NOT:', result3);
} 


comparisonOperators(8, 12);
logicalOperators(a, b);