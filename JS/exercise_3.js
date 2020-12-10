var students = ['Ravi','Vibhav','Rani','Raja'];
var permission = prompt("Would you like to start the roster web? y/n");

if (permission === 'y')
{
while (cmds != 'quit')
{
	var cmds = prompt("Please select an action: add,remove,display and quit");

	if (cmds === 'add')
	{
		var newValue  = prompt("What name would you like to add?");
		students.push(newValue);
		console.log(students)
	}
	else if (cmds === 'remove')
	{
		var rmvValue = prompt("What name you would like to remove?");
		students.splice(rmvValue);
		console.log(students)
	}
	else if (cmds === 'display')
	{
		students.forEach(element => console.log(element));
}
}
}
alert("Thank you for your time. Please refresh the page to start over")
