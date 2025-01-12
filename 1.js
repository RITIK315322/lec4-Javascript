//hoisting....

//memory : OS {SCOPE}

//Global scope
var a = 12;
//Block scope
{
    var b = 23;
    console.log(a,b);


}
// Funtion scope
function abc(){
    var c = 34;
    console.log(a,b,c);
    
}

abc();//function call