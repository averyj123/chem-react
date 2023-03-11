import './inputBox.css';
//import {useState} from 'react';
import Input from '../input/input.js';

function InputBox(props){   
  const renderButtons = () => {
   let inputs = [];
   for(let i = 0; i < props.placeholders.length; i++) {
      inputs.push(<Input placeholder={props.placeholders[i]} inputType={props.inputTypes[i]} className="inputs"/>);
   }
     return inputs
   }

   return (
      <div className = 'inputbox' id = 'hello'>
         {renderButtons()}
      </div>
      
   )
}

export default InputBox;