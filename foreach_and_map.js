//1

let arr = [1,2,3]

function doubleValues(arr){
    const newArry = arr.map(val => val*2)
    return newArry
}

//2

function onlyEvenValues(arr){
    const newArry = arr.filter((val) => {return val%2===0})
    return newArry
}

console.log(onlyEvenValues([1,2,3,4]))

//3

function showFirstAndLast(arr){
    // first lets filter only the strings
    const stringArry = arr.filter((val)=>{return typeof val === "string"})

    const newarry = [stringArry[0], stringArry[stringArry.length -1]]

    return newarry
}

console.log(showFirstAndLast([1,2,3,"hi", "hello", 2, 6, "m"]))

//4

function vowelCount(str){
    let obj = {};
    for(let v of str){
        let val = v.toLowerCase();
        if(val === "o" || val === "a" || val === "u" || val === "e" || val === "i"){
            if(obj[val]){
                obj[val]++;
            }
            else{
                obj[val] = 1;
            }
        }

    }

    return obj;
}

console.log(vowelCount("hello world")); 

//5

let str = "motty"

function capitalized(str) {
    const convert = str.toUpperCase()
    return convert 
}

const newstr = capitalized(str)
console.log(newstr)

//6


function shiftLetters(str){
    const abc = [
    "a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"
    ];
    
    let shifted = "";
    for (let l of str){
        if(l.toLowerCase === "a"){
            shifted += "z"
        }
        const index = abc.indexOf(l)
        shifted += abc[index-1];
    }

    return shifted;

}

console.log(shiftLetters("motty"))

//7

function swapCase(str){
    let newString = "";
    for(let i =0; i<str.length; i+=2){
        
        newString+=capitalized(str[i])
        if(i+1 < str.length){
             newString+=str[i+1]

        }
       
    }

    return newString;
}

console.log(swapCase("mottyghtgffdfrfr"))
