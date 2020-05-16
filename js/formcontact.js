function validate(inputText){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if ( email != "" && email != "" && message!="") 
{ 
             if(inputText.value.match(mailformat))
            {
            alert ("votre requête a été envoyée, merci de votre contact!");
             }
            else
            {
            alert("Entrer une adresse mail valide !");
            document.formcontact.email.focus();
            return false;
            }
            }
else{
alert("svp remplir tout les chemps!!")
    return true;
}
}
