import './input.css';
import {useState} from 'react';

function Input(props){
   const [text, setText] = useState('');
   
  const handleChange = (e) => {
      setText(e.target.value);
   }

   return (
      <div className = 'inputbox' id = 'hello'>
         <input placeholder = {props.placeholder} type={props.inputType} onChange={handleChange}></input>
      </div>
      
   )
}

export default Input