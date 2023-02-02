let array = [21, 34, 55, 89, 144, 233, 377]
function findSMax(arr){
    var max = Math.max.apply(null , arr);
    arr.splice(arr.indexOf(max), 1)
    return Math.max.apply(null, arr);
}

let secondMax = findSMax(array);
console.log(secondMax);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)