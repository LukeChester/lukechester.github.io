
var userBtn = document.querySelector('button');
var heading = document.querySelector('h1');

// Add button listener to change username
userBtn.onclick = function() {
	setUsername();
}

// Function to choose and store username
function setUsername() 
{
	var name = prompt('Enter your name:');
	localStorage.setItem('name', name);
	heading.textContent = 'User: ' + name;
}

// Set up username on page load
if (!localStorage.getItem('name')) 
{
	setUsername();
}
else 
{
	var storedName = localStorage.getItem('name');
	heading.textContent = 'User: ' + storedName;
}

