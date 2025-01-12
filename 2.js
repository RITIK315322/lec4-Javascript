//hoisting : it does not support 

//console.log(a);
//let a = 11;

//Memory

let a =11;
{
    let b =21;
console.log(a,b);
}
//console.log(a,b);
function abc() {
    let c =31;
    console.log(a,c);
    
    
}
abc();
