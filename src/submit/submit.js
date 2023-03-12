import './submit.css';
import {useState} from 'react';
import {getGrams, getConc, getMoles} from '../getResults.js';

function Submit(props){
   const [results, setResults] = useState('');

   const arrayEquals = (a, b) => {
      return Array.isArray(a) &&
         Array.isArray(b) &&
         a.length === b.length &&
         a.every((val, index) => val === b[index]);
   }

   const pickFunction = () => {
      //go through each index of the list of information (props.information), and check if something exists there.
      //if it does, append it to a list of indexes
      // then check taht list against other lists to decide the right funciton
      let lst = props.information;
      let indexes = [];
      let info = [];
      for(let i = 0; i < 5; i++){
         if(lst[i]){
            indexes.push(i);
            info.push(lst[i]);
         }
      }
      //return indexes;
      if(arrayEquals(indexes, [0,1])) {
         return [getMoles, info];
      }
      console.log(indexes);
   }
   const handleClick = () => {
      const results = pickFunction();
      const func = results[0];
      const info = results[1];
      console.log(info)
      setResults(func.apply(null,info));
   }
   
   return (
      <>
         <button type="submit" id="button" onClick = {handleClick}>Submit</button>
         <h1>{results}</h1>
      </>
      
   )
}

export default Submit;