import './input.css';
import {useState} from 'react';
import Submit from '../submit/submit.js'

function Input(props){
   const [text, setText] = useState('');
   
  const handleChange = (e) => {
      setText(e.target.value);
   }

   return (
      <div className = 'inputbox' id = 'hello'>
         <input placeholder = {props.placeholder} type={props.inputType} onChange={handleChange} className="anInput"></input>
         <Submit information={["H2O", "2"]} />
      </div>
      
   )
}

export default Input