import './App.css';
import Input from './input/input.js';
import Submit from './submit/submit.js'
import InputBox from './inputBox/inputBox.js'
import {useState, useEffect} from 'react';

function App(props) {
  const [gtomclicked, setGtomClicked] = useState(false);
  const [ctogclicked, setCtogClicked] = useState(false);
  const [mtogclicked, setMtogClicked] = useState(false);
  const [gramText, setGramText] = useState('');
  const [moleculeText, setMoleculeText] = useState('');
  const [molesText, setMolesText] = useState('');
  const [concentrationText, setConcentrationText] = useState('');
  const [volumeText, setVolumeText] = useState('');
  const [enabled, setEnabled] = useState(true);

   
  const handleGramChange = (e) => {
      setGramText(e.target.value);
      if(!enabled){
        setEnabled(true);
      }
   }
   const handleMoleculeChange = (e) => {
      setMoleculeText(e.target.value);
      if(!enabled){
        setEnabled(true);
      }
   }
   const handleMolesChange = (e) => {
      setMolesText(e.target.value);
      if(!enabled){
        setEnabled(true);
      }
   }
   const handleConcentrationChange = (e) => {
      setConcentrationText(e.target.value);
      if(!enabled){
        setEnabled(true);
      }
   }
   const handleVolumeChange = (e) => {
      setVolumeText(e.target.value);
      if(!enabled){
        setEnabled(true);
      }
   }

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
            <InputBox enabled ={enabled} setEnabled={setEnabled} placeholders = {["grams", "molecule"] } inputTypes={["number", "text"]} handleChange={[handleGramChange, handleMoleculeChange, handleMolesChange,handleConcentrationChange, handleVolumeChange]} texts ={[gramText, moleculeText, molesText, concentrationText, volumeText]}/>
          </>
          )}
        <button id="conc" onClick = {handleCtogClick}>concentration to grams</button>
        {ctogclicked &&  (
          <>
            <InputBox enabled ={enabled} setEnabled={setEnabled} placeholders = {["concentration", "volume", "molecule"] } inputTypes={["number", "number", "text"]} handleChange={[handleGramChange, handleMoleculeChange, handleMolesChange,handleConcentrationChange, handleVolumeChange]} texts ={[gramText, moleculeText, molesText, concentrationText, volumeText]}/>
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
    <h1>TO DO</h1>
    <ul>
      <li>fix submit button thing</li>
      <li>make a way to display the results of that input in a neat way</li>
      <li>add transitions for opening and closing buttons</li>
      <li> use regex to verify input</li>
    </ul>
   </>
  );
}
export default App;
