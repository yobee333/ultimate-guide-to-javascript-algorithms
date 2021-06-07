/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/




//first clean up the string 1. put it all lowercase 2. replace all non alphabetical character with an empty string (no spaces or symbols) 3. split into an array of characters 4. sort the letters(elements) into alphabetical order 5. join them all back together in a string
// const sanitizeString = function (str){
//     return str.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('')
// }


//Direct comparison--use cleaned up string and then match them up. If they match true, if not false

function isAnagram(stringA, stringB) {
    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('')
    }
    return sanitizeString(stringA) == sanitizeString(stringB)
}


//character map object check if the character already exists as a property in the character map charMap using .hasOwnProperty() method. If it does, we increment its value, and if it doesn't, we add the character as a property and set its value to 1.

function createCharMap(text){
    let charMap = {}

    for(let char of text){
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    return charMap
}


//Comparing character maps 1. create the character map. 2. check that the length of both strings are equal, if not, return false. 3. if the are equal, generate their character maps stored as variables stringAMap and stringBMap 4. for...in loop to compare every character and value in both. 5. if they don't match, false, otherwise true

function isAnagram(stringA, stringB){
    function createCharMap(text){
        let charMap = {}
    
        for(let char of text){
            if(charMap.hasOwnProperty(char)){
                charMap[char]++
            }else{
                charMap[char] = 1
            }
        }
        return charMap
    }

    if(stringA.length ==stringB.length){
        let stringAMap = createCharMap(stringA)
        let stringBMap = createCharMap(stringB)
        for(let char in stringAMap){
            if(stringAMap[char] !== stringBMap[char]){
                return false
            }
        }
        return true
    }else{
        return false
    }
}

module.exports = isAnagram