import { useState } from "react";
import './App.css';
import Custom from './components/Custom';
import ExtraBoard from "./components/ExtraBoard";
import ChooseDifficulty from "./components/ChooseDifficulty";
import DrawBoard from "./components/DrawBoard";

const App=()=> { 

const[difficulty, setDifficulty]= useState('noDifficulty');

const[gridClass, setGridClass]=useState('noGrid');

const [toggle, setToggle]= useState('true');

const[isVisible, setVisibility]=useState('false');

const[showGame, setShowGame]=useState(false)

const gameVisibility = showGame ? 'visible' : 'hidden';

const [gridValues, setValues]=useState({
  rows:0, cols:0, bombs:0
})

const alterGrid=(newGrid)=>{
setValues(newGrid);
}


const makeBegGrid=()=>{
  setValues({rows:10, cols:10, bombs:15})  
  setToggle(!toggle)  
  setDifficulty('Beginner');
  setShowGame(true)
  setGridClass('begGrid');
};

const makeIntGrid=()=>{
  setValues({rows:15, cols:15, bombs:35})
  setToggle(!toggle)  
  setDifficulty('Intermediate');
  setShowGame(true)
  setGridClass('intGrid');
};

const makeExpGrid=()=>{
  setValues({rows:20, cols:20, bombs:75})
  setToggle(!toggle)  
  setDifficulty('Expert');
  setShowGame(true)
  setGridClass('expGrid');
};

const makeCustomGrid=()=>{
  setToggle(!toggle)
  setDifficulty('Custom')
  setGridClass('customGrid')
  setVisibility('true')
}

const [isHide, setIsHide] = useState(true);

setTimeout(() => setIsHide(false), 1000);

const[reset, setReset]=useState(false)

 const changeReset = () => {
  setReset(!reset);
};


let display='';
if(difficulty==='noDifficulty'|| difficulty=='Custom'){
display='none';
}
else{
display='grid'
//display='flex'
};

setTimeout(()=>{
  document.querySelector('.container').style.visibility='visible';},500

)
document.querySelector('body').addEventListener('contextmenu',( e )=> { e.preventDefault(); return false; })


  return (
    <div className="App">
<div className='container'>
      {toggle && (
        <ChooseDifficulty makeBegGrid={makeBegGrid} makeIntGrid={makeIntGrid}
        makeExpGrid={makeExpGrid} makeCustomGrid={makeCustomGrid}/>
     )}
      {isVisible==='true'?<Custom makeTable={alterGrid} table={gridValues} showGame={function(){setShowGame(true)}}/>:null}
      <div className='gameContainer' style={{ visibility: gameVisibility }}>
      < ExtraBoard className='extraBoard' resetter={changeReset}/>
      
      {!isHide ? <DrawBoard gridClass={gridClass} id='drawBoard' display={display} mode={difficulty}  grid={gridValues}
       changeReset={changeReset} shouldReset={reset}/> : null}
      
      
      </div>
      </div>
    </div>
  );
}

export default App;