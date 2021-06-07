/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



//.forEach() 1. convert everything to lower case and split words into an array 2. iterate thru each word with .forEach() and make the first letter of the word uppercase and get the rest of the lowercase word using .slice(). 3. combine the capitalized first letter and the lowercase rest of the word into its own array capsArray. 4. combine elements using .join() using empty space as separator

function capSentence(text) {
  let wordsArray = text.toLowerCase(). split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
    capsArray.push(word[0].toUpperCase() + word.slice(1))
  })
  return capsArray.join(' ')
}

//.map() and slice()--same as previous except use map to loop thru every word in the array and execute the same function as before to create capsArray which is an array of capitalized words. Return capsArray with join and space as separator

function capSentence(text){
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = wordsArray.map(word => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}


//.map() and .replace() replace the first letter of each word with the uppercase then .push() to capsArray

function capSentence(text){
  let wordsArray = text.toLowerCase().split(' ')

  let capsArray = wordsArray.map(word => {
    return word.replace(word[0], word[0].toUpperCase)
  })
  return capsArray.join(' ')
}

module.exports = capSentence

