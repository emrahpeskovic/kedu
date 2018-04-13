var createbutton = document.getElementById('create');
createbutton.onclick = saveInfo;

var userData = [];

function saveInfo() {
var forNavn = document.getElementById('fornavn').value;
var efterNavn = document.getElementById('efternavn').value;
var emailInput = document.getElementById('email').value;
var passwordInput = document.getElementById('password').value;

var infoObj = {fornavn:forNavn,efternavn:efterNavn,email:emailInput,password:passwordInput};
userData.push(infoObj);

localStorage.setItem("bruger1",JSON.stringify(userData));
}
