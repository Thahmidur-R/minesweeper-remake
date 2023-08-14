import './DrawBoard.css'






const DrawBoard=(props)=>{
  let board=[];
  

   
    let i=0;
 
  
  let rows=props.grid.rows;
  let columns=props.grid.cols;
  let bombs= props.grid.bombs;

  let varPadding="0px";
  let numPadding=rows*11+100;
  if(rows>10){varPadding=`${numPadding}px`}
 
  function uncoverZero(row,col){
    
    if(row!==0 && col!==0){
      if(document.getElementById('uncovered-'+(row-1)+'-'+(col-1)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col-1)+'-flag')==null){
      document.getElementById('uncovered-'+(row-1)+'-'+(col-1)).style.visibility='visible'
      if(board[row-1][col-1]==0){
        uncoverZero(row-1,col-1)
     
      
     
        
        
       };
    }
  }
  if(col!==0){
     if(document.getElementById('uncovered-'+(row)+'-'+(col-1)).style.visibility!=='visible'& document.getElementById('covered-'+(row)+'-'+(col-1)+'-flag')== null){
    document.getElementById('uncovered-'+(row)+'-'+(col-1)).style.visibility='visible'
    if(board[row][col-1]==0){
      uncoverZero(row,col-1)
      
    }
    
  }
  }
  if(row!==(rows-1) && col!==0){
   if(document.getElementById('uncovered-'+(row+1)+'-'+(col-1)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col-1)+'-flag')==null){
  document.getElementById('uncovered-'+(row+1)+'-'+(col-1)).style.visibility='visible'
  if(board[row+1][col-1]==0){
    uncoverZero(row+1,col-1)
    
  }
  
  }
  }
  if(row!==0){
     if(document.getElementById('uncovered-'+(row-1)+'-'+(col)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col)+'-flag')== null){
  document.getElementById('uncovered-'+(row-1)+'-'+(col)).style.visibility='visible'
  if(board[row-1][col]==0){
    uncoverZero(row-1, col)
    
  }
  
  }
  }
  
  if(row!==(rows-1)){
    
   if(document.getElementById('uncovered-'+(row+1)+'-'+(col)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col)+'-flag')==null){
  document.getElementById('uncovered-'+(row+1)+'-'+(col)).style.visibility='visible'
  if(board[row+1][col]==0){
    uncoverZero(row+1, col)
    
  }
  
  }
  }
  if(row!==0 && col!==(columns-1)){
    
   if(document.getElementById('uncovered-'+(row-1)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col+1)+'-flag')==null){
  document.getElementById('uncovered-'+(row-1)+'-'+(col+1)).style.visibility='visible'
  if(board[row-1][col+1]==0){
    uncoverZero(row-1, col+1)
    
  }
  
  }
  }
  if(col!==(columns-1)){
     if(document.getElementById('uncovered-'+(row)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row)+'-'+(col+1)+'-flag')==null){
  document.getElementById('uncovered-'+(row)+'-'+(col+1)).style.visibility='visible'
  if(board[row][col+1]==0){
    uncoverZero(row, col+1)
    
  }
  
  }
  }
  
  if(row!==(rows-1) && col!==(columns-1)){
    if(document.getElementById('uncovered-'+(row+1)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col+1)+'-flag')== null){
  document.getElementById('uncovered-'+(row+1)+'-'+(col+1)).style.visibility='visible'
  if(board[row+1][col+1]==0){
    uncoverZero(row+1, col+1)
    
  }
  
  
  }
  }
  };
  
  
  function tileClicked(event){
    
    let str=event.target.id;
    if (str.includes('uncovered')) {
      str = str.replace('uncovered', 'covered');
    }
    let uncoverStr=str.replace('covered-','uncovered-')
    let newStr=str.replace('covered-','')
    let newStrFlag= str.replace('-flag','')
    let newStrRow= Number(newStr.substring(0, newStr.lastIndexOf('-')))
    let newStrCol=Number(newStr.substring(newStr.lastIndexOf('-')+1))
    let currTile=document.getElementById(str);
    
    switch(event.button){
      case 0:
        if(str==''){return}
        if(str.includes('flag')|| currTile.style.visibility=='visible'){return;}
        if(board[newStrRow][newStrCol] === 'bomb'
        ){
          document.getElementById(uncoverStr).style.backgroundColor= 'red';
        let allTiles= document.getElementsByClassName('uncoveredTile')
        for (let i = 0; i < allTiles.length; i++ ) {
          allTiles[i].style.visibility = "visible";
      };
     
    
  return;
        }
      
  document.getElementById(uncoverStr).style.visibility='visible';
  
 
  if(board[newStrRow][newStrCol]===0){
  uncoverZero(newStrRow, newStrCol)
  };
  break;
      case 2:
      
        if(str==''){return}
        if(str.includes('flag')){
          currTile.classList.remove('flaggedTile');
          currTile.classList.add('coveredTile')
  currTile.setAttribute('id', newStrFlag);
  
        return;
      }
        if(document.getElementById(uncoverStr).style.visibility=='hidden'){
        if(document.getElementById(str+'-flag')){
          document.getElementById(str+'-flag').classList.remove('flaggedTile');
        }
      
      else{
  currTile.classList.remove('coveredTile');
  currTile.classList.add('flaggedTile')
  currTile.setAttribute('id', str+'-flag')
  };
      }
      
        break;
    }
  
   };
  
   
    for(let r=0; r<rows; r++){
      board.push([])
      for(let c=0; c<columns;c++){
    board[r].push(0)
      }
     }
    while(i<bombs){
      let randomRow=  Math.floor(Math.random()* rows);
    let randomColumn=  Math.floor(Math.random()* columns);
      if(board[randomRow][randomColumn]==0){
  board[randomRow][randomColumn]='bomb';
  i++;
    }
    else{continue;}
    };
    for(let r=0; r<rows; r++){
      for(let c=0; c<columns; c++){
      
   
    let val= board[r][c];
  
    //checking if tile is adjacent to a bomb
    
    if( c!==0 && board[r][c-1]=='bomb' && val !=='bomb' ){
      board[r][c]++;
    }
    if(c!==(columns-1) && board[r][c+1]=='bomb' && val !=='bomb'){
      board[r][c]++;
    }
    if(r!==0 && board[r-1][c]=='bomb' && val !=='bomb'){
      board[r][c]++;
    }
    if(r!==(rows-1) && board[r+1][c]=='bomb' && val !=='bomb'){
      board[r][c]++;
    }
    if(r!==0 && c!==(columns-1) && board[r-1][c+1]=='bomb' && val !='bomb'){
      board[r][c]++;
    }
    if(r!==(rows-1) && c!==(columns-1) && board[r+1][c+1]=='bomb' && val !='bomb'){
      board[r][c]++;
    }
    if(r!==0 && c!==0 && board[r-1][c-1]=='bomb' && val !='bomb'){
      board[r][c]++;
    }
    if(r!==(rows-1) && c!==0 && board[r+1][c-1]=='bomb' && val !='bomb'){
      board[r][c]++;
    }
    
    
    
    
  }
        
    }
   let container=document.querySelector('.gameContainer')
  
  
   let boardWidth=columns*40;
   let ratio= rows>columns?rows/columns: columns/rows;
   let customMax=400*ratio;
   
  container.style.width=`${boardWidth}px`
  
if(window.matchMedia("(max-width:1500px)").matches){
  document.querySelector('.gameContainer').style.paddingTop=varPadding
}

function findMinHeight(className) {
  if(className!=='customGrid'){return}
  
  let minGridHeight = '400px';
  if (rows > 14) {
    minGridHeight = '600px';
  }
  if (rows > 20) {
    minGridHeight = '750px';
  }
  
  const customGrid = document.querySelector(`.${className}`);
  if (customGrid) {
    if (window.matchMedia("(min-width:1500px)").matches) {
      customGrid.style.minHeight = minGridHeight;
    }
  }
  return;
}
  if(columns>rows){
    
    container.style.maxWidth=`${customMax}px`
  }
  else{
    
 
  container.style.maxWidth='600px';
 
  
  
  };

  
  const createTile = (r, c, value) => {
    let content;
if (value === 'bomb') {
  content = <div className='bombPicture' />;
} else if(value===0){
  content = '';
}
else{content=value}

    return (
   
        
        <div className="uncoveredTile" id={`uncovered-${r}-${c}`} style={{visibility:'hidden'}}>
        {content}
        </div>
   
    );
  };
  const MakeBoard = () => {
    return board.map((row, r) => {
      return row.map((col, c) => {
        return (
          <div className="coveredTile"  id={`covered-${r}-${c}`} onMouseDown={tileClicked} key={c}>
            {createTile(r, c, col)}
          </div>
        );
      });
    });
  };


return(
  <div id='gameBoard' className={props.gridClass} style={{display:`${props.display}`, gridTemplateRows:`repeat(${rows}, 1fr)`,gridTemplateColumns:`repeat(${columns}, 1fr)`, minHeight:findMinHeight(props.gridClass) }}>
    <MakeBoard></MakeBoard>
  </div>
);
 

  
  
  }

  export default DrawBoard