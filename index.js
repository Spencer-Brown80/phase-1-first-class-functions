function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

function receivesAFunction(runFiveMiles) {
    runFiveMiles();

} 

//take a callback function as an argument
//call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function

function returnsANamedFunction() {
     function namedFunction() {
        console.log("Here is my named function");
     }

     return namedFunction;

}

//take no arguments
//return a named function

function returnsAnAnonymousFunction() {
    return function() {

    };

}

//take no arguments
//return an anonymous function