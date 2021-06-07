/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//Iterator using a counter 1. declare the vowels we are looking for. 2. set a for...of loop to iterate thru each letter. 3. .toLowerCase so we don't miss anything. 4. use .includes() to check for the vowels. 5. increase the counter if you find one

const Vowels = ['a', 'e', 'i', 'o', 'u']

function vowelsCounter(text) {
    let counter = 0

    for (let letter of text.toLowerCase()){
        if (vowelsCounter.includes(letter)){
            counter++
        }
    }
    return counter
}


//Regex 1. call match function to look for the vowels in the regex array gi global, case insensitive. 2. conditional to check for any matches. 3. return the length of the array of matches ***regex method is app. 88% faster than the iterative approach***

function vowelsCounter(text){
    let matchingInstances = text.match(/[aeiou]/gi)

    if(matchingInstances){
        return matchingInstances.length
    }else{
        return 0
    }
}



module.exports = vowelsCounter;
