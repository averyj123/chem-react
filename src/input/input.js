import './input.css'

function Input(props){
   return (
      <div className = 'inputbox'>
         <input placeholder = {props.placeholder} type={props.inputType}></input>
         <button id = "hello">Submit</button>
      </div>
      
   )
}

export default Input