/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//using charMap to create an object so we can easily find out how many of each character 1. set charMap to an empty object. 2. for...of loop to iterate thru the string of text. 3. check every character to see if it has been mapped already by calling the .hasOwnProperty() method on the object. if it is, we increment value, otherwise it is added as a property and value set to 1

// let charMap = {}

// for (let char of text){
//     if(charMap.hasOwnProperty(char)){
//         charMap[char]++
//     }else{
//         charMap[char] = 1
//     }
// }



//For...in iteration

function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }

    //maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for...in loop. maxChar is used to store the character with the highest value on every iteration. Check the character being evaluated has a greater value than maxCharValue which is initially 0, if it is, it becomes the new maxCharValue and the character is stored in the maxChar. if not, on to the next value. 
    for(let char in charMap){
        if(charMap[char] > maxCharValue){
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar

}


//Array from the character map

function maxRecurringChar(text){
    let charMap = {}
    let charArray = []
    let valuesArray = []
    let maxCharValue = 0

    for (let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 0
        }
    }

//1. array of the keys of the charMap (all the characters in the text) known as charArray. 2. array of the values(number of occurences) known as valuesArray arranged in corresponding order.  3. Math.max() to find maximum value in the array of values and store in maxCharValue. 4. .indexOf() to search valuesArray for position of the maxCharValue--the position of the maxCharValue in the valuesArray corresponds to the position of the character in charArr with that number of occurences.
    charArray = Object.keys(charMap)
    valuesArray = Object.values(charMap)

    // charArray = ['a', 'b', 'c','d']
    // valuesArray = [4,3,2,1]
    
    maxCharValue = Math.max(...valuesArray)

    return charArray[valuesArray.indexOf(maxCharValue)]
}

module.exports = maxRecurringChar;


