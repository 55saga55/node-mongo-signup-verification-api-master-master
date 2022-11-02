
function load(){
 
  const xhttp = new XMLHttpRequest();
   
  xhttp.open("POST", "http://localhost:4000/accounts/register",true);
  xhttp.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  let obj = {
    title :  document.getElementById("title").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
    acceptTerms: true

}
let objPost = JSON.stringify(obj);
  xhttp.send(objPost);
  xhttp.onload = function() {
    console.log(this.responseText);
 }
}



