var abc = 12345;

function parent (){
    var a = 123;

    console.log(abc,a);

    function child(){
        var b = 12;
        console.log(abc,a,b);
        }
        child();
    
}

parent();