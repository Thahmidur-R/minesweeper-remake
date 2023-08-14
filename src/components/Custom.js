
import { useState } from "react";
import './Custom.css'
const Custom=(props)=>{
    let newGrid={}
 
    const [inputValues, setInput]=useState({
      inputRows:0, inputCols:0, inputBombs:0
    });
    const handleChange=(event)=>{
      setInput({...inputValues,
        [event.target.name]: event.target.value})
    }
  
    return(
      <div className='customBoard'>
  
  <label id='labelRow'>
    Rows: <input type="text" name="inputRows" onChange={handleChange}/>
  </label>
  
  <label id='labelCol'>
    Columns: <input type="text" name="inputCols" onChange={handleChange} />
  </label>
  
  <label id='labelBomb'>
   Bombs: <input 
    type="text" name="inputBombs" 
     onChange={handleChange}/>
  </label>
   
  <button className='customButton' onClick={()=>{
    let numBombs=inputValues['inputBombs']
    let maxBombs= (inputValues['inputRows'] * inputValues['inputCols']);
    
    if(numBombs > maxBombs){
      numBombs=maxBombs
    }
          newGrid={
            rows:inputValues['inputRows'],
            cols:inputValues['inputCols'],
            bombs:numBombs
        }
        
  document.querySelector('.customBoard').style.display='none';
  document.getElementById('gameBoard').style.display='grid'
       props.showGame()
  props.makeTable(newGrid)
        }}>Enter</button>
      </div>
    )
  }

  export default Custom
  