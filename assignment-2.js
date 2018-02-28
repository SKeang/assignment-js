//Challenge 1

//declaring each symbol
var a = "_";
var b = "#";
// object both has both symbols
var both = a + b;

//getting the first dash
console.log(a);

//looping through 7 times
for (var i=0; i <7; i++){
	//console logging both symbols
    console.log(both);
    //adding an additional of each symbol
    both = both + a + b;
}

//Challenge 2

function isEven(number){
	if(number % 2 === 0){
		console.log("the number is even");
	} else if (number % 2 !== 0){
		console.log("the number is odd");
	}
}
/*If number is divisible by 2 console log the number is even
since even numbers when divided will equal 0.
If the number is not divisible by 2 then it must be odd.
*/

//Diving Deeper

function isEven(number){
	if(number % 2 === 0){
		console.log("the number is even");
	} else if (number % 2 !== 0){
		console.log("the number is odd");
	} else {
		console.log("this is not a number");
	}
}

/*any other value for number will console log that it is not a number
like a char or a string
*/