import './ExtraBoard.css'
const ExtraBoard=(props)=>{
  
    const handleResetClick=()=>{
      props.resetter();
    }
  return(
    <div className='extraContainer'>
      <button className="resetButton" onClick={handleResetClick} type='button'>&#x21bb;</button>
    </div>
  )
  }

export default ExtraBoard