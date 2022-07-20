import { useState } from 'react'
import './App.css'
import MyButton from './components/MainMuteButton';


let paths = {
  on: '../icons/on.svg',
  off: '../icons/off.svg',
}

const App = () => {
  const [imagePath, setImagePath] = useState(paths['on'])
  
  const handleClick =() =>{
     if (imagePath == paths['on']) {
       setImagePath(paths['off'])
     } else {
       setImagePath(paths['on'])
     }
     console.log('>>>>>>>>>>>>', imagePath)
  }

  return (
    <div className="App">
      <MyButton handleClick={handleClick} imagePath={imagePath}/>
      <h1>hello</h1>
    </div>
  );
}
export default App;

