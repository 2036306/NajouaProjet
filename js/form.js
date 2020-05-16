var attempt = 3; // Variable de repitition
function validate(){
var username = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( username == "najoua.ghrieb@bdeb.qc.ca" && password == "najoua"){
alert ("Connectez-vous avec succès");
window.location = "bienvenue.html"; 
return false;
}
else{
alert("mot de passe ou email inccorect!!")
attempt --;//Décrémenter d'une unité.
alert("Il vous reste "+attempt+" fois;");
// Désactiver les champs après 3 tentatives.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}