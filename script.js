//Author Henrique Oliveira ID: 20190611 and Nathiélle Nascimento ID: 20187564

//Fade In for Home Page
function myFunction()
{
	$("#logo-home").fadeIn(4000);
}


//Set up validation for name, email, phone and message using alert in the Contact.html
function formValidator(){
	// Make quick references to our fields
	var name = document.getElementById('name');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	
	// Check each input in the order that it appears in the form!
	if(isAlphabet(name, "Please enter only letters for your name")){
			if(isNumeric(phone, "Fomart for phone number wrong. Please enter only numbers. ")){
				if(lengthRestriction(phone, 7, 12)){
						if(emailValidator(email, "Please enter a valid email address")){
							if(notEmpty(message, "Please enter your message")){
								return true;
							}
						}	
				}
			}
	}		

	return false;
	
}

function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z-" "]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


function lengthRestriction(elem, min, max){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		alert("Please enter between " +min+ " and " +max+ " characters");
		elem.focus();
		return false;
	}
}


function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


// function Slide for Menu to keep rotating the images
function slider(sliderName, speed) {
	var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotateSlide, speed);
	
		$(sliderClass + ' > :first').addClass(activeClass);

		$(sliderClass).hover(function(){
			clearInterval(rotate);
		}, function() {
			rotate = setInterval(rotateSlide, speed);
		});
	
	function rotateSlide() {
		var activeSlide = $(sliderClass + ' > .' + activeClass),
				nextSlide = activeSlide.next();

		if(nextSlide.length == 0) {
			nextSlide = $(sliderClass + ' > :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	} 
}

slider('intro', 4000);









