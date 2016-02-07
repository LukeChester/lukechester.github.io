
var userBtn = document.querySelector('button');
var heading = document.querySelector('h1');

// Add button listener to change username
userBtn.onclick = function() {
	setUsername();
}

// Function to choose and store username
function setUsername() 
{
	var name = prompt('Enter the name of a cutie:');
	localStorage.setItem('name', name);
	heading.textContent = 'Hello cutie ' + name;
}

// Set up username on page load
if (!localStorage.getItem('name')) 
{
	setUsername();
}
else 
{
	var storedName = localStorage.getItem('name');
	heading.textContent = 'Hello cutie  ' + storedName;
}

