//
var solutionNumber =23;
var userGuess = prompt("Guess what number I am thinking off between 0 and 40");
if (Number (userGuess) === solutionNumber) {
    alert ( "You must be psychic!");
}
else if (Number(userGuess) > solutionNumber){ 
alert ("You might want to aim lower, try again")
}
{  
    if (Number(userGuess) < solutionNumber)
    alert ("You might want to aim higher, try again")
   
}







