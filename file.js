// (a,b)=>{
//     return a + b;
// }

// (a,b)=>{
//     return a -b;
// }

// (a,b)=>{
//     return a * b;
// }

// (a,b) =>{
//     return a/b;
// }


// function start(num, fn){
    
//     console.log(fn(num, sub))
// }

// function multi(num, sub){
//     const res =  num*2;

//     sub(res, )
// }

// function sub(num, div){
//     const res = num-5
//     div(num)
// }
// function div(num){
//     const res = num/10

//     multi(num, div)
// }

// start(5)

// function test(){
//     var a = "b";
//     if(true){
//         var a = "a";
//     }
//     console.log(a)
// }
// test()

// const names = ["motty", "eytan"]

// function printValue(val){
//     console.log(`elment: ${val}`)
// }


// function myForEach(arr, fn){
//     for(let i = 0; i < arr.length; i++){
//         fn(arr[i])
//     }
// }

// myForEach(names, printValue)

// function decoration(fn){
//     console.log("before")
//     fn()
//     console.log("after")
//     return function(){console.log("done")}
// }

function spellfactory(spellname, count = 1){
    
    return ()=>{
        const power = count++;
        console.log(`spell name: ${spellname}, power: ${power}`)
        
    }

    

}

const spell1  = spellfactory("ice")
spell1()
const spell2 = spellfactory("fire")
spell2()