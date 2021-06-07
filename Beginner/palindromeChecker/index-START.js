/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



//straightforward reverse the text and check with a boolean

function palindromeChecker(text) {
    let reversedText = text.toLowerCase().split('').reverse().join('')

    return text === reversedText

}

//loop thru and compare characters lowercase and split into an array 2. .every() method to loop thru and perform check against the current letter and its index in the array as parameters. Then regurn the result of the comparison between letter and current letter occupying the position. The .every() would evaluate to true if the test passes in all cases and false if it does not. HOWEVER we have to stop the comparison halfway through the string which this does not do!

function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('')

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1]
    })
    return result
}

//OPTIMIZED

function palindromeChecker(text){
    let textLen = text.length
    for (let i = 0; i < textLen/2; i++){
        if(text[i] !== text[textLen - 1 - i]){
            return false
        }
    }
    return true
}

module.exports = palindromeChecker;