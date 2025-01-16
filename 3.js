//Hoisting : IT does not support 

//console.log(a);
//const a = 11;

//Memory : Block Scopic 

const a = 11;
a = 111;

{
    const b = 21;
    console.log(a,b);

    
}
//console.log(a,b);

function abc() {

    const c = 31;
    console.log(a,c);
    
}
abc();
