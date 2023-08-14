
import './ChooseDifficulty.css';


const ChooseDifficulty=(props)=>{
    return(
      <div className="chooseDifficulty">
          
      <button type='button' className='difficultyButton' onClick={()=>{
        
        props.makeBegGrid()    
    }}>Beginner</button>
      <button type='button' className='difficultyButton' onClick={()=>{
      
       props.makeIntGrid() 
        }}>Intermediate</button>
      <button type='button' className='difficultyButton' onClick={()=>{
        
        props.makeExpGrid() 
        }}>Expert</button> 
        <button type='button' className="difficultyButton" onClick={()=>{
         
          props.makeCustomGrid()
        }}>Custom</button>
    </div>
    )
  }

export default ChooseDifficulty