// Developer Elquin Cascavita
// summary in analysis and development of the second coderbyte's exercises
//  Exercise:
// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"


LongestWord = (sen) => {

    let words = sen.split(' ');
    const signePuntuation = /\W/
    let result = ['']
    words.map((element) => {

        const condition = signePuntuation.test(element) ? "false" : element.length > result[0].length ? result.shift() : "false"
        if (condition != "false") result.push(element)
    })


    return sen = result[0];
}

// keep this function call here 
console.log(LongestWord("buena perros que1234 se dice mae"));