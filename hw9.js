function buttonValidate(){
	if (checkOrder() == true){
 		alert("Order Accepted");
	newpage();
	} else {
	alert("false")
	}
	return false;
}


function checkOrder(){
	var nameValid = checkname();
	var streetValid = checkstreet();
	var stateValid = checkstate();
	var cityValid = checkcity();
	var zipValid = checkzip();
	var emailValid = checkemail();
	var phoneValid = checkphone();
	var paymentValid = checkpayment();
	
	return nameValid && cityValid && emailValid && phoneValid && paymentValid && zipValid && stateValid;
}


function checkname(){
		var named = document.getElementById("name");
        var nameent = named.value;
        var tomatch = /^\w{2,}$/;
        if (!tomatch.test(nameent)){
          	writetoelement("name2",
          				 "Enter your real name",
          				 "red");
			return false;
		}
		writetoelement("name2", "", "red");
		return true;
}

function checkstreet(){
		var street = document.getElementById("street");
        var streetent = street.value;
        var tomatch = /^\w{2,}$/;
        if (!tomatch.test(streetent)){
          	writetoelement("street2",
          				 "Street invalid",
          				 "red");
			return false;
		}
		writetoelement("name2", "", "red");
		return true;
}
		
function checkstate(){
		var state = document.getElementById("state");
        var stateent = state.value;
        var tomatch = /^[A-Z]{2}$/;
        if (!tomatch.test(stateent)){
          	writetoelement("state2",
          				 "State invalid",
          				 "red");
			return false;
		}
		writetoelement("state2", "", "red");
		return true;
}

function checkzip(){
		var zip = document.getElementById("zip");
        var zipent = zip.value;
        var match = /^\d{5}$|^\d{5}-\d{4}$/;
          if (!match.test(zipent)){
          	writetoelement("zip2",
          				"Zip code invalid",
          				"red");
			return false;
			}
		writetoelement("zip2",
					"",
				 	"red");
		return true;
}

function checkphone(){
		var phone = document.getElementById("phone");
        var phoneentered = phone.value;
        var match = /^\d{3}-\d{3}-\d{4}$ | ^(\d{3})\d{3}-\d{4}$/;
          if (!match.test(phoneentered)){
          	writetoelement("phone2",
          				"Phone number invalid",
          				"red");
			return false;
			}
		writetoelement("phone2", 
					"",
					"red");
		return true;
}

function checkcity(){
		var city = document.getElementById("city");
        var cityent = city.value;
        var tomatch = /^\w{2,}$/;
        if (!tomatch.test(cityent)){
          	writetoelement("city2",
          				 "City invalid",
          				 "red");
			return false;
		}
		writetoelement("city2", "", "red");
		return true;
}

function checkemail(){
		var email = document.getElementById("email");
        var emailent = email.value;
        var tomatch = /^[\w._-]{4,}@\w{2,}\.\w{2,4}$/;
          if (!tomatch.test(emailent)){
          	writetoelement("email2",
          				 "Email invalid",
          				 "red");
			return false;
			}
		writetoelement("email2",
					"",
					"red");
		return true;
}

function checkpayment(){
	console.log("in checkpayment()");
	if (!getRadioElement("functionType") ){
		errorMessage("Select a payment method", "radio");
		return false;
		}
	else {
		errormessage("ERRORRORORORORO", "radio");
		return true;
		}
	
}

function getRadioElement(name) {
	var payment = document.getElementsByName(name);
	for (var i = 0; i <= payment.length; i++) {
		if (payment[i] != undefined && payment[i].checked) {
			return payment[i];
		}
	}
	return null;
}




function errorMessage(str, location)
{
	var resultloc = document.getElementById(location);
	resultloc.innerHTML = str;
}





// =================================================================






function newpage(){


	
var name = document.getElementById("name").value;
var street = document.getElementById("street").value;
var city = document.getElementById("city").value;
var state = document.getElementById("state").value;
var zip = document.getElementById("zip").value;
var phone = document.getElementById("phone").value;
var radio = getRadioElement("functionType").value;
var email = document.getElementById("email").value;

document.open();
	document.write("<h1>Success!</h1><br><br>");
	document.write("Here is your order " + name + " and welcome to it! <br>" );
	document.write("Address: " + street + ", " + city + ", " + state + ", " + zip + "<br>");
	document.write("Phone number: " + phone + "<br>");
	document.write("Payment method: " + radio + "<br>");
	alert("hey");
	document.write("E-mail: " + email + "<br>");

	document.write("<a href=\"http://cscilab.bc.edu/~surzyn/hw8/hw8.php\">Place another order</a>");
	document.close();
}


function writetoelement(elementname, message, color){
		var resultloc=document.getElementById(elementname);
		resultloc.style.color = color;
		resultloc.innerHTML =  message;
    }
    

// ============================================================

function namefocus(){
	writetoelement("name2",
				"This is where you enter your name (at least 2 letters)",
				"green");
}

function emailfocus(){
	writetoelement("email2",
				"This is where you enter your email",
				"green");
}
function statefocus(){
	writetoelement("state2",
				"This is where you enter your state (Capital Abbreviation)",
				"green");
}
function phonefocus(){
	writetoelement("phone2",
				"This is where you enter your phone number [xxx-xxx-xxxxx]",
				"green");
}
function streetfocus(){
	writetoelement("street2",
				"This is where you enter your street",
				"green");
}
function zipfocus(){
	writetoelement("zip2",
				"This is where you enter your zip code",
				"green");
}
function cityfocus(){
	writetoelement("city2",
				"This is where you enter your city",
				"green");
}
	
// ==============================================================

function nameblur(){
	writetoelement("name2",
				"",
				"green");
}

function phoneblur(){
	writetoelement("phone2",
				"",
				"green");
}
function zipblur(){
	writetoelement("zip2",
				"",
				"green");
}
function cityblur(){
	writetoelement("city2",
				"",
				"green");
}

function streetblur(){
	writetoelement("street2",
				"",
				"green");
}

function stateblur(){
	writetoelement("state2",
				"",
				"green");
}

function emailblur(){
	writetoelement("email2",
				"",
				"green");
}
