// find the word does exist in the string,,,,,,,,,,,,,,,

// function match(str){
//     let doseExist = "love"
//     if(str.includes(doseExist)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let string = "I Love You";
// let matching = match(string.toLowerCase());
// console.log(matching);



// find how many vowel does exist in the string,,,,,,,


let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function findVowel(str){
    let vCount = 0;
    for(var i = 0; i < vowel.length ; i++){
        // console.log(str[i]);
        if(vowel.includes(str[i])){
            vCount++;
        }
    }
    return vCount;
}

let string = "I Love You";
const count = findVowel(string.toLowerCase());
console.log(count);