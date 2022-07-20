import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MainMuteButton';

// import ReactLogo from '/Users/robert/Exercises/CodePlatoon/week9/react-mute-button/muteButton/icons/off.svg';

// let paths = {
//   on: '../icons/on.svg',
//   off: '../icons/off.svg',
// }

const App = () => {
  // const [imagePath, setImagePath] = useState(paths['on'])
  const [isMuted, setIsMuted] = useState(false)
  
  const handleClick =() =>{
    let newMuteState = !isMuted
    console.log("Setting new mute state to", newMuteState)

    setIsMuted(newMuteState)
    // console.log('>>>>>>>>>>>')
    // if (imagePath == paths['on']) {
    //   setImagePath(paths['off'])
    //   // console.log(imagePath)
    //   console.log('OFF')
    // } else {
    //   setImagePath(paths['on'])
    //   // console.log('ON')
    // }
    // console.log('>>>>>>>>>>>>', imagePath)
    // return imagePath
  }

  return (
    <div className="App">

      {/* <MyButton onClick={handleClick} path={imagePath}/> */}
      <MyButton isMuted={isMuted} handleClick={handleClick}/>

      <h1>hello</h1>
    </div>
  );
}
export default App;

