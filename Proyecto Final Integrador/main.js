//Seccion Contacto - Email validation

function validateEmail(){
                
	// Get our input reference.
	var emailField = document.getElementById('user-email');
	
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(emailField.value) ){
		alert('Tu email es válido, continúa con el envío del mensaje');
		return true;
	}else{
		alert('Tu email es inválido, por favor, vuelve a intentarlo');
		return false;
	}
} 