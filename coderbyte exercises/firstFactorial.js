// Developer Elquin Cascavita
// summary in analysis and development of the second coderbyte's exercises
//  Exercise:
// First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.


FirstFactorial = (num) => {



    return num > 1 ? num * FirstFactorial(--num) : 1;
}

// keep this function call here 
console.log(FirstFactorial(5));