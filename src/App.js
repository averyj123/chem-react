import './App.css';
import Input from './input/input.js';
import {useState} from 'react';

function App(props) {
  const [gtomclicked, setGtomClicked] = useState(false);
  const [ctogclicked, setCtogClicked] = useState(false);
  const [mtogclicked, setMtogClicked] = useState(false);

  const handleMtogClick = (e) => {
    setMtogClicked(prev => {return !prev});
  }

  const handleGtomClick = (e) => {
    setGtomClicked(prev => {return !prev});
  }

  const handleCtogClick = (e) => {
    setCtogClicked(prev => {return !prev});
  }

  return (
    <>
    <div class="header">
        <h1>chemistry help</h1>
    </div>
    <div class="buttons">
        <button id="grams" onClick = {handleGtomClick}>grams to moles</button>
        {gtomclicked && <Input/>}
        <button id="conc" onClick = {handleCtogClick}>concentration to grams</button>
        {ctogclicked && <Input/>}
        <button id="moles" onClick = {handleMtogClick}>moles to grams</button>
        {mtogclicked && <Input/>}
    </div>
   </>
  );
}

export default App;
