import { useEffect, useState } from 'react'


function App() {

function colorChanger(e){
    setColor(e)
}
const [color, setColor] = useState('pink');

const handleColorChange = (newColor) => {
  setColor(newColor);
};

return (
  <div style={{ backgroundColor: color, height: '100vh' }}>
    <button style={{backgroundColor:"red"}} onClick={() => colorChanger('red')}>Red</button>
    <button style={{backgroundColor:"green"}} onClick={() => handleColorChange('green')}>Green</button>
    <button style={{backgroundColor:"blue"}} onClick={() => handleColorChange('blue')}>Blue</button>
    <button style={{backgroundColor:"yellow"}} onClick={() => handleColorChange('yellow')}>Yellow</button>
    <button style={{backgroundColor:"purple"}} onClick={() => colorChanger('purple')}>Purple</button>
  </div>
)
}
export default App
