/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//for loop--check if the length of the current word under evaluation wordArray[i] is greater than our maxLength. If it is, replace maxLength with the new longest word and store in result

function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > maxLength){
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}


//.reduce() Compare length of current word under evaluation with the length of our accumulator maxLengthWord which is set to an empty string at the start. Whenever the length of the current word is greater, return current word and new accumulator value otherwise the accumulator retains its original value into the next comparison.

function longestWord(text){
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if(currentWord.length > maxLengthWord.length) {
            return currentWord
        }else{
            return maxLengthWord
        }
    }, '')
}

module.exports = longestWord

//.sort() subract the length of the second word from the first word which gives positive, negative or 0 value that determines which word is longer and by extension which should come before the other. sortedArray has the words arranged in descending order according to their length. return index 0 bc that's the longest word**this is the significantly slowest method

function longestWord(text) {
    let sortedArray = text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)
    
    return sortedArray[0]
}