import './input.css';
import {useState} from 'react';
import Submit from '../submit/submit.js'

function Input(props){

   return (
      <div className = 'inputbox' id = 'hello'>
         <input placeholder = {props.placeholder} type={props.inputType} onChange={props.handleChange} className="anInput"></input>
      
      </div>
   )
}

export default Input