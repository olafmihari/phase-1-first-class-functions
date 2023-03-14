 function receivesAFunction(callback){
    callback()
 }

 function returnsANamedFunction(){
    function bit () {
        console.log("go to hospital")
    }
    return bit;
 }

function  returnsAnAnonymousFunction(){
    return () =>{{console.log("no")}}
}