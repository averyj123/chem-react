import './submit.css';
import {useState} from 'react';
import {getGrams, getConc, getMoles} from '../getResults.js';

function Submit(props){
   const [results, setResults] = useState('')
   const handleClick = () => {
      //setResults(getGrams("H2O", 15));
      setResults('hey there');

   }
   
   return (
      <>
         <button type="submit" id="button" onClick = {handleClick}>Submit</button>
         <h1>{results}</h1>
      </>
      
   )
}

export default Submit;