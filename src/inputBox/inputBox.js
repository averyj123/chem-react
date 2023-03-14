import './inputBox.css';
import Input from '../input/input.js';
import Submit from '../submit/submit.js';


function InputBox(props){   

  const renderButtons = () => {
   let inputs = [];
   const changes = {
      "grams": props.handleChange[0],
      "molecule": props.handleChange[1],
      "moles": props.handleChange[2],
      "concentration": props.handleChange[3],
      "volume": props.handleChange[4]
   }
   for(let i = 0; i < props.placeholders.length; i++) {
      inputs.push(<Input placeholder={props.placeholders[i]} inputType={props.inputTypes[i]} className="inputs" handleChange={changes[props.placeholders[i]]} enabled={props.enabled} setEnabled={props.setEnabled}/>);
   }
     return inputs
   }

   return (
      <div className = 'inputbox' id = 'hello'>
         {renderButtons()}
         <Submit information={props.texts} enabled={props.enabled} setEnabled={props.setEnabled}/>
      </div>
      
   )
}
//submit information = the list of all the text things returned from the app.js
// add a method to submit that goes through the information and seese which have values, then uses that to decide which method to run
// run that method and display the information
export default InputBox;