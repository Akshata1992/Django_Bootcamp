// Player 1 details
var player1 = prompt("Player 1.Enter your Name. Your're gonna be Blue.");
var player1Color = 'rgb(86, 151, 255)';

// validation for prompt variable for player 1

for (i=0;i<player1.length;i++){
  // 0-9
  if (player1[i].charCodeAt(0) >=48 &&  player1[i].charCodeAt(0) <=57){
    console.log("Digits check done");
  }
  // A-Z
  else if (player1[i].charCodeAt(0) >=65 &&  player1[i].charCodeAt(0) <=90){
    console.log("Capital letters check done");
  }
  // a-z
  else if (player1[i].charCodeAt(0) >=97 &&  player1[i].charCodeAt(0) <=122){
    console.log("Small letters check done");
  }
  else{
    alert("Please enter name with characters and numbers only");
    var player1 = prompt("Player 1.Enter your Name. Your're gonna be Blue.");
  }
  }

// Player 2 details
var player2 = prompt("Player 2.Enter your Name. Your're gonna be Red.");
var player2Color = 'rgb(237, 45, 73)';

// validation for prompt variable for player 2

for (i=0;i<player2.length;i++){
  // 0-9
  if (player2[i].charCodeAt(0) >=48 &&  player2[i].charCodeAt(0) <=57){
    console.log("Digits check done");
  }
  // A-Z
  else if (player2[i].charCodeAt(0) >=65 &&  player2[i].charCodeAt(0) <=90){
    console.log("Capital letters check done");
  }
  // a-z
  else if (player2[i].charCodeAt(0) >=97 &&  player2[i].charCodeAt(0) <=122){
    console.log("Small letters check done");
  }
  else{
    alert("Please enter name with characters and numbers only");
    var player2 = prompt("Player 2.Enter your Name. Your're gonna be Red.");
  }
  }

var table = $('table tr');
// Below are the functions used to control the game operations

// function to report the color of button of selected column
function returnColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// function to check bottom availability of selected column and returns the buttom of row which is still Grey
function checkBottom(colIndex) {
  var colorReport = returnColor(6,colIndex);
  for (var row = 6; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(128, 128, 128)') {   
      return row;
    }
  }
}

//To change the color of button when player drops a chip
function ChangeOfColor(rowIndex,colIndex,colorChange){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',colorChange);
}

//function to match the color
function colorMatch(one,two,three,four){
  return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

//function to report the win
function reportWin(rowNum,colNum){
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
// function for horizontal check
function horizontalWinCheck(){
  for (row=0;row <= 6;row++){
    for (col=0;col <= 4;col++){
      if (colorMatch(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
        reportWin(row,col);
        console.log('Horz');
        return true;
      }
      else{
        continue;
      }
    }
  }
}

//function for vertical check
function verticalWinCheck(){
  for (col =0;col<= 6;col++){
    for(row=0;row<=4;row++){
      if (colorMatch(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
        reportWin(row,col);
        console.log('Vert');
        return true;
      }
      else{
        continue;
      }
    }
  }

}

// function for diagonal check
function diagonalWinCheck(){
  for (row=0;row<=6;row++){
    for (col=0;col<=6;col++){
      if (colorMatch(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
        reportWin(row,col);
        console.log('Diag');
        return true;
      }
      else if (colorMatch(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))){
        reportWin(row,col);
        console.log('Diag');
        return true;  
      }
      else{
        continue;
      }
    }
  }
}

// function to define game end
function gameEnd(name){
      $('h1').text('Congratulations!');
      $('h3').text(name).css('20px');
      $('h4').text('Please refresh the page to play again');
      $('h6').text('You have won the game!!!');
}
// start with player 1

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;
console.log(currentColor)

// change the text of header to indicate player
$('h4').text(player1+" :it is your turn, pick a column to drop a blue chip");

//check which column selected

$('.board button').on('click', function(){
  var col = $(this).closest('td').index();

  //check the bottom of column to drop a chip to available button
  var bottomAvail = checkBottom(col);

  //Drop a chip down the bottom available column
  ChangeOfColor(bottomAvail,col,currentColor);

  //Check for win or tie
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
    gameEnd(currentName);
    $('td button').attr("disabled","disable");
  }
  else{
    //If no win or tie, continue to next player
    currentPlayer = currentPlayer * -1;

    //Re-check who the current player is.
    if (currentPlayer === 1){
      currentName = player1;
      currentColor = player1Color;
      $('h4').text(currentName+" : it is your turn, please pick  a column to drop your blue chip.");
    }
    else{
      currentName = player2;
      currentColor = player2Color;
      $('h4').text(currentName+" : it is your turn, please pick a column to drop your Red chip.");
    }
}
})

