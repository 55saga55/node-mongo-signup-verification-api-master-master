console.log("hi");

function myFunction(event) {
   var theEvent = event || window.event;

   var key = theEvent.keyCode || theEvent.which;
   var p = document.getElementById("inputuser4").value;
     if(p.length == 0){
      document.getElementById("user").innerHTML = "firstname atleast contain 1 charecter";
      document.getElementById("user").style.color = "red"
     }
     else if(key > 47 && key < 58){
      document.getElementById("user").innerHTML = "firstname  must be with numeric value";
      document.getElementById("user").style.color = "red"
     }

     else if ( (key > 64 && key < 91) || (key > 96 && key < 123)) {
         document.getElementById("user").innerHTML = "entered correct firstname" ;        
         document.getElementById("user").style.color = "green"         

      }
      else {
         theEvent.returnValue = false;
         if (theEvent.preventDefault) theEvent.preventDefault();
    }


}
function myFunction1(event) {
   var theEvent = event || window.event;

   var key = theEvent.keyCode || theEvent.which;
   var p = document.getElementById("inputuser5").value;
     if(p.length == 0){
      document.getElementById("user1").innerHTML = "lastname atleast contain 1 charecter";
      document.getElementById("user1").style.color = "red";
     }
     if(key > 47 && key < 58){
      document.getElementById("user1").innerHTML = "entered correct lastname with numeric value";
      document.getElementById("user1").style.color = "red";
     }

     else if ( (key > 64 && key < 91) || (key > 96 && key < 123)) {
         document.getElementById("user1").innerHTML = "entered correct lastname";
         document.getElementById("user1").style.color = "green"
      }
      else {
         theEvent.returnValue = false;
         if (theEvent.preventDefault) theEvent.preventDefault();
    }


}


function password() {
   var data = document.getElementById("inputPassword4").value;

   var capital = 0;
   var small = 0;
   var number = 0;
   var special = 0;

   for (let i = 0; i < data.length; i++) {
      var ascii = data.charCodeAt(i);

      if (ascii > 64 && ascii < 91) {
         ++capital;
      } else if (ascii > 96 && ascii < 123) {
         ++small;
      } else if (ascii > 47 && ascii < 58) {
         ++number;
      } else if (
         (ascii > 31 && ascii < 48) ||
         (ascii > 57 && ascii < 65) ||
         (ascii > 90 && ascii < 97) ||
         (ascii > 122 && ascii < 127)
      ) {
         ++special;
      }
   }

   if (data.length < 5) {
      document.getElementById("passw").innerHTML ="password must be contain minimum 5 character";
      document.getElementById("passw").style.color = "red"
   } else if (capital > 0 && small > 0 && number > 0 && special > 0) {
      document.getElementById("passw").innerHTML = "";
   } else {
      document.getElementById("passw").innerHTML = "invalid password";
      document.getElementById("passw").style.color = "red"
   }
}

function cheackPass(){
   var pas1 = document.getElementById("inputPassword4").value;
   var pas2 = document.getElementById("inputPassword5").value;

   if (pas1 != pas2) {
      document.getElementById("conf").innerHTML = "password does not match";
      document.getElementById("conf").style.color = "red"
   } else {
      document.getElementById("conf").innerHTML = "passwords are match";
      document.getElementById("conf").style.color = "green"
   }
}

function ValidateEmailAddress() {
   var emailString = document.getElementById("email").value;
   // console.log(emailString);

   var atSymbol = emailString.indexOf("@");
   var dot = emailString.indexOf(".");
   var gmail = emailString.indexOf("gmail");
   var yahoo = emailString.includes("yahoo");
   var hotmail = emailString.includes("hotmail");
   if (
      (atSymbol < 1) ||
      (dot <= atSymbol + 2) ||
      (dot === emailString.length - 1) ||
      (gmail > 0)||
      (yahoo) ||
      (hotmail)
   ) {
      document.getElementById("email1").innerHTML = "email is not valid";
      document.getElementById("email1").style.color = "red"
   } else {
      document.getElementById("email1").innerHTML = "email is valid";
      document.getElementById("email1").style.color = "green"
   }
}

function zip(event) {
   var zipcode = document.getElementById("inputzipcode4").value;
console.log(zipcode);
   var theEvent2 = event || window.event;

   var key2 = theEvent2.keyCode || theEvent2.which;

   if (key2 > 47 && key2 < 59) {
      document.getElementById("zip1").innerHTML = "you entered correct Zipcode";
      document.getElementById("zip1").style.color = "green"
   } else {
      theEvent2.returnValue = false;
      if (theEvent2.preventDefault) theEvent2.preventDefault();
   }
}

function saveData()
{
    var obj = {
        title : document.getElementById("title").value,
        firstName : document.getElementById("inputuser4").value,
        lastName : document.getElementById("inputuser5").value,
        password: document.getElementById("inputPassword4").value,
        confirmPassword: document.getElementById("inputPassword5").value,
        email: document.getElementById("email").value,
        Address: document.getElementById("inputAddress").value,
        Address2: document.getElementById("inputAddress2").value,
        acceptTerms: true

    }
    
    fetch("http://localhost:4000/accounts/register",{
        method: "POST",
        body : JSON.stringify(obj),
       headers: {
       "Content-type": "application/json; charset=UTF-8"
               }
    }).then(y=>y).then(y=> {
        console.log(y);
        window.location.href ="/Javascript/form/login.html"
    })

}