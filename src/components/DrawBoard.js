
import logo from '../bomb.svg';
import flagImg from '../flag_icon_orange_4.svg';

const DrawBoard=(props)=>{
  let board=[];
  

   
    let i=0;
    let image=document.createElement('img')
   image.src=logo;
   image.alt='bomb image';
   image.className='bombPicture';
  let image2=document.createElement('img')
  image2.src= flagImg;
  image2.alt='flag image';
  image2.className='flagPicture'
  let rows=props.grid.rows;
  let columns=props.grid.cols;
  let bombs= props.grid.bombs;

  let varPadding="0px";
  let numPadding=rows*11+100;
  if(rows>10){varPadding=`${numPadding}px`}
 
  
  
  
  
  function uncoverZero(row,col){
    
    if(row!==0 && col!==0){
      if(document.getElementById((row-1)+'-'+(col-1)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col-1)+'-flag')==null){
      document.getElementById((row-1)+'-'+(col-1)).style.visibility='visible'
      if(board[row-1][col-1]==0){
        uncoverZero(row-1,col-1)
     
      
     
        
        
       };
    }
  }
  if(col!==0){
     if(document.getElementById((row)+'-'+(col-1)).style.visibility!=='visible'& document.getElementById('covered-'+(row)+'-'+(col-1)+'-flag')== null){
    document.getElementById((row)+'-'+(col-1)).style.visibility='visible'
    if(board[row][col-1]==0){
      uncoverZero(row,col-1)
      
    }
    
  }
  }
  if(row!==(rows-1) && col!==0){
   if(document.getElementById((row+1)+'-'+(col-1)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col-1)+'-flag')==null){
  document.getElementById((row+1)+'-'+(col-1)).style.visibility='visible'
  if(board[row+1][col-1]==0){
    uncoverZero(row+1,col-1)
    
  }
  
  }
  }
  if(row!==0){
     if(document.getElementById((row-1)+'-'+(col)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col)+'-flag')== null){
  document.getElementById((row-1)+'-'+(col)).style.visibility='visible'
  if(board[row-1][col]==0){
    uncoverZero(row-1, col)
    
  }
  
  }
  }
  
  if(row!==(rows-1)){
    
   if(document.getElementById((row+1)+'-'+(col)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col)+'-flag')==null){
  document.getElementById((row+1)+'-'+(col)).style.visibility='visible'
  if(board[row+1][col]==0){
    uncoverZero(row+1, col)
    
  }
  
  }
  }
  if(row!==0 && col!==(columns-1)){
    
   if(document.getElementById((row-1)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row-1)+'-'+(col+1)+'-flag')==null){
  document.getElementById((row-1)+'-'+(col+1)).style.visibility='visible'
  if(board[row-1][col+1]==0){
    uncoverZero(row-1, col+1)
    
  }
  
  }
  }
  if(col!==(columns-1)){
     if(document.getElementById((row)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row)+'-'+(col+1)+'-flag')==null){
  document.getElementById((row)+'-'+(col+1)).style.visibility='visible'
  if(board[row][col+1]==0){
    uncoverZero(row, col+1)
    
  }
  
  }
  }
  
  if(row!==(rows-1) && col!==(columns-1)){
    if(document.getElementById((row+1)+'-'+(col+1)).style.visibility!=='visible' && document.getElementById('covered-'+(row+1)+'-'+(col+1)+'-flag')== null){
  document.getElementById((row+1)+'-'+(col+1)).style.visibility='visible'
  if(board[row+1][col+1]==0){
    uncoverZero(row+1, col+1)
    
  }
  
  
  }
  }
  };
  
  
  function tileClicked(event){
    
    let str=event.target.id;
    if(str.length<8){str= 'covered-'+str}
    let newStr=str.replace('covered-','')
    let newStrFlag= str.replace('-flag','')
    let newStrRow= Number(newStr.substring(0, newStr.lastIndexOf('-')))
    let newStrCol=Number(newStr.substring(newStr.lastIndexOf('-')+1))
    let currTile=document.getElementById(str);
    switch(event.button){
      case 0:
        if(str.includes('flag')){return;}
        if(document.getElementById(newStr).getAttribute('value') === 'bomb'
        ){
          document.getElementById(newStr).style.backgroundColor= 'red';
        let allTiles= document.getElementsByClassName('uncoveredTile')
        for (let i = 0; i < allTiles.length; i++ ) {
          allTiles[i].style.visibility = "visible";
      };
     
    
  return;
        }
      
  document.getElementById(newStr).style.visibility='visible';
  
 
  if(document.getElementById(newStr).getAttribute('value')==='zero'){
  uncoverZero(newStrRow, newStrCol)
  };
  break;
      case 2:
        
        if(str.includes('flag')){
          currTile.classList.remove('flaggedTile');
          currTile.classList.add('coveredTile')
  currTile.setAttribute('id', newStrFlag);
  
        return;
      }
        if(document.getElementById(newStr).style.visibility=='hidden'){
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
        let coveredTile=document.createElement('div')
        coveredTile.className='coveredTile'
        coveredTile.id='covered-'+r.toString()+ '-' + c.toString();
    let uncoveredTile=document.createElement('div');
    uncoveredTile.id=r.toString()+ '-' + c.toString();
    uncoveredTile.className='uncoveredTile';
   
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
    
    document.getElementById('gameBoard').append(coveredTile)
    document.getElementById(coveredTile.id).append(uncoveredTile)
    document.getElementById(uncoveredTile.id).style.visibility='hidden'
    if(board[r][c]!=='bomb' && board[r][c]!==0){
    uncoveredTile.innerText=board[r][c]
    }
    if(board[r][c]==0){
     
      document.getElementById(uncoveredTile.id).setAttribute('value', 'zero');
      
    }
    if(board[r][c]=='bomb'){
      document.getElementById(uncoveredTile.id).appendChild(image.cloneNode(true))
     
      document.getElementById(uncoveredTile.id).setAttribute('value', 'bomb');  
    }
    document.getElementById(coveredTile.id).addEventListener('mousedown', tileClicked)
    
    
  }
        
    }
   let container=document.querySelector('.gameContainer')
   let gameBoard=document.getElementById('gameBoard')
   let boardHeight=rows*40;
   let boardWidth=columns*40;
   let ratio= rows>columns?rows/columns: columns/rows;
   let customMax=400*ratio;
   
  gameBoard.style.gridTemplateRows= 'repeat('+rows+',1fr)';
  gameBoard.style.gridTemplateColumns= 'repeat('+columns+',1fr)';
  gameBoard.style.height=`${boardHeight}px`
  container.style.width=`${boardWidth}px`
  
if(window.matchMedia("(max-width:1500px)").matches){
  document.querySelector('.gameContainer').style.paddingTop=varPadding
}


  if(rows>columns){
    gameBoard.style.maxHeight=`${customMax}px`
  
    if(ratio>2){document.querySelector('.App').style.paddingTop="300px";}

   
  }
  else if(columns>rows){
    
    container.style.maxWidth=`${customMax}px`
  }
  else{
    
  gameBoard.style.maxHeight='600px'
  container.style.maxWidth='600px';
  
  
  }
  
  
  }

  export default DrawBoard