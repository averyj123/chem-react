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
    <div className="header">
        <h1>chemistry help</h1>
    </div>
    <div className="buttons">
        <button id="grams" onClick = {handleGtomClick}>grams to moles</button>
        {gtomclicked && (
          <>
            <Input placeholder = "grams" inputType="number"/>
            <Input placeholder = "molecule" inputType="text"/>
          </>
          )}
        <button id="conc" onClick = {handleCtogClick}>concentration to grams</button>
        {ctogclicked &&  (
          <>
            <Input placeholder = "concentration" inputType = "number"/>
            <Input placeholder = "volume" inputType="number"/>
            <Input placeholder = "molecule" inputType="text"/>
          </>
          )}
        <button id="moles" onClick = {handleMtogClick}>moles to grams</button>
        {mtogclicked &&  (
          <>
            <Input placeholder = "moles" inputType="number"/>
            <Input placeholder = "molecule" inputType="text"/>
          </>
          )}
    </div>
   </>
  );
}

export default App;
