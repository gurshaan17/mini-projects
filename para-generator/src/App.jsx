import { useState } from 'react'


function App() {

  const [para, setPara] = useState('')
  const [words,setWords] = useState(0)

  const wordsArray = ['cat', 'dog', 'house', 'car', 'tree', 'book', 'computer', 'mountain', 'beach', 'sun' ,'hello' ,'plant' ,'shoes' ]

  function ParaGenerator(){
    if(words<=0){alert("Please enter a valid sequence of words")}
    let sentence = []
    for(let i = 0; i < words ; i++){
      const randomIndex = Math.floor(Math.random()*(wordsArray.length))
      const randomElement = wordsArray[randomIndex]
      sentence.push(randomElement)
    }
    setPara(sentence.join(" "))
  }

 return <div>
   <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }}>
    <div>Para Generator</div>
    <br />
    <div>
      <center>
      <input type = "number"  onChange={(e)=>{setWords(e.target.value)}}/>
      <button onClick = {ParaGenerator}>Generate</button>
      </center>
      <div>{para}</div>
    </div>
    </div>
  </div>
}

export default App
