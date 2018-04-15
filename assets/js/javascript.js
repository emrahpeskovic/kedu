//signup//


var userData = [];

function saveInfo() {
//her henter jeg info som man skriver ind så det tilgængelig til min funktioner//
var forNavn = document.getElementById('fornavn').value;
var efterNavn = document.getElementById('efternavn').value;
var emailInput = document.getElementById('email').value;
var passwordInput = document.getElementById('password').value;
//Her laver jeg et object og pusher dataen til det øverste array i toppen hvorefter jeg bruger json og sætter det i local storage//
var infoObj = {fornavn:forNavn , efternavn:efterNavn , email:emailInput, 'password':passwordInput};
userData.push(infoObj);
localStorage.setItem("bruger1",JSON.stringify(userData));
}


//Henter json.stringify ned og parser dataen//
function checkInfo() {
//henter dataen fra local storage og parser den med Json//
  var localData = localStorage.getItem('bruger1');
  var convertedData = JSON.parse(localData);
//finder de items jeg skal bruge fra objected. ps skriver 0 fordi det sidder i et array//
  var storedEmail = convertedData[0].email;
  var storedPassword = convertedData[0].password;
//her renamer jeg de items jeg lige hentede for at gøre det nemmere for mig selv//
  var enteredEmail = document.getElementById('email');
  var enteredPassword = document.getElementById('password')
//login check//
  if(enteredEmail.value !== storedEmail || enteredPassword.value !== storedPassword) {
      alert('Fejl forkert email eller password');
      return false;
  }else {
      alert('Sucess!');
      location.href = "index.html";
  }
}

//scrill til toppen af siden//
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

//Forum ikke//

function submitPost() {
  var div = document.createElement("div");
  var inputValue = getElementById('textValue').value;
  var text = document.TextNode(inputValue);

}
