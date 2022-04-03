// Developer Elquin Cascavita
// summary in analysis and development of the first coderbyte's exercises
//  Exercise:
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.


CodelandUsernameValidation = (str) => {

    // 1. The username is between 4 and 25 characters.
    // const result = str.length >= 4 && str.length <= 25;
    // return result

    // 2. It must start with a letter.
    // const caracterSearch = /^[^0-9]/
    // return caracterSearch.test(data)

    // 3. It can only contain letters, numbers, and the underscore character.
    // const searchCaracternumber = /\w/ o  [a-zA-Z0-9_] ;
    // const result = searchCaracternumber.test(str);
    // return result

    // 4. It cannot end with an underscore character.    
    // var result = [^_]$
    // return result
    // generate variable general

    const searchCaracternumber = /^[^0-9][a-zA-Z0-9_]*[^_]$/;
    const preResult = searchCaracternumber.test(str)
    return result = str.length >= 4 && str.length <= 25 && preResult;

}

// keep this function call here     
console.log(CodelandUsernameValidation("21Appppp12"));