var firstName = prompt("Hello and Welcome.Please enter you first name:");
var lastName = prompt("Hello and Welcome.Please enter you last name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters?");
var petName = prompt("What is your pet name?");
alert("Thank you so much for the information")

var result = 0;


if (age> 12 && age < 50) {
  result = result + 1;
}

if (height > 90){
  result = result + 1;
}

if (petName[petName.length-1] === 'y'){
  result = result + 1;
}

if (result === 3)
{
  console.log("Congrats! you are qualified :)");
}
else{
  console.log("Sorry! try again next time")
}
