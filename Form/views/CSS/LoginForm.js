const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


var PasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else if(usernameValue.length<4){
		setErrorFor(username, 'Username must be longer than 4 characters');
	}else{
		setSuccessFor(username);
	}
	
	
	if(PasswordRegex.test(passwordValue)){
		setSuccessFor(password);
	}else{
		setErrorFor(password,"Password is not valid");
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	







