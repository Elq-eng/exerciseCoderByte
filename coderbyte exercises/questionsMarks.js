// Developer Elquin Cascavita
// summary in analysis and development of the second coderbyte's exercises
//  Exercise:
// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.


QuestionsMarks = (str) => {

    str = str.split("");
    var pila = []
    var pilaCaracter = []
    const regdeCaracters = /\W/;
    const regdeNumber = /[0-9]/;
    var result = false


    str.map((element) => {
        // encuentra el primer numero de la lista
        const numberTest = regdeNumber.test(element) ? element : false
            // si es false y la pila esta vacia se agrega
        numberTest != false ? dataStore(element, pila, pilaCaracter) : regdeCaracters.test(element) ? pila.length % 2 != 0 ? pilaCaracter.push(element) : false : false

    });

    for (var i = 0; i < pilaCaracter.length - 1; i++) {
        for (var j = 0; j < pilaCaracter.length; j++) {
            if (i <= j) {
                if (parseInt(pilaCaracter[i]) + parseInt(pilaCaracter[j]) === 10) {
                    result = true
                    if (pilaCaracter.slice(i, j).length - 1 != 3) result = false
                }
            }

        }
    }
    return result

}

var dataStore = (element, pila, pilaCaracter) => {
    pila.push(parseInt(element));
    pilaCaracter.push(element)
}

// keep this function call here 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));