//signup//


var userData = [];

function saveInfo() {
var forNavn = document.getElementById('fornavn').value;
var efterNavn = document.getElementById('efternavn').value;
var emailInput = document.getElementById('email').value;
var passwordInput = document.getElementById('password').value;

var infoObj = {fornavn:forNavn , efternavn:efterNavn , email:emailInput, 'password':passwordInput};
userData.push(infoObj);
localStorage.setItem("bruger1",JSON.stringify(userData));
}

//login check//

function checkInfo() {
  var localData = localStorage.getItem('bruger1');
  var convertedData = JSON.parse(localData);

  var storedEmail = convertedData[0].email;
  var storedPassword = convertedData[0].password;

  var enteredEmail = document.getElementById('email');
  var enteredPassword = document.getElementById('password')

  if(enteredEmail.value !== storedEmail || enteredPassword.value !== storedPassword) {
      alert('Fejl forkert email eller password');
      return false;
  }else {
      alert('Sucess!');
      location.href = "index.html";
  }
}
