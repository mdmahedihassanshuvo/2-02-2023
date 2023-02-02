function findMax(a, b , c){
    if((a > b) && (a > c)){
        return "a is the largest number";
    }
    else if((b > c) && (b > a)){
        return "b is the largest number";
    }
    else{
        return "c is the largest number";
    }
}

let largeNumber = findMax(5, 10 , 7);
console.log(largeNumber);