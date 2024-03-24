const wordsArray = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'mountain', 'beach', 'sun' ,'hello' ,'plant' ,'shoes' ]

let sentence = []
for(let i = 0; i <= 8 ; i++){
    const randomIndex = Math.floor(Math.random()*(wordsArray.length))
    const randomElement = wordsArray[randomIndex]
    sentence.push(randomElement)   
}

console.log(sentence.join(" "))

 
