var resetButton = document.querySelector("#b");
var grid = document.querySelectorAll("td");


// function to reset the values
function clear(){
  for (var i=0;i<grid.length;i++){
    grid[i].textContent === '';
  }
}

resetButton.addEventListener('click',clear)

// function to enter values in grid

function gridInput(){
  if (this.textContent === ''){
    this.textContent = 'X';
  }
  else if (this.textContent === 'X'){
    (this.textContent) = 'O';
  }
  else{
    this.textContent = '';
  }
  }

//add event listener to grid cells

for (var i=0;i<grid.length;i++){
  grid[i].addEventListener('click',gridInput);
}
