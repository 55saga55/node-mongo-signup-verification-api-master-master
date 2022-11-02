function saveData() {
    var obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("inputPassword4").value,

    }

    fetch("http://localhost:4000/accounts/authenticate", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(y => y.json()).then(y => {
        console.log(y);
        localStorage.setItem("user", JSON.stringify(y));
        if(y.message != undefined ){
          document.getElementById("invaild").innerHTML="You enter wrong email-id or password";
          document.getElementById("invaild").style.color="red";
        }
        else{
        window.location.href = "/Javascript/form/dashboard.html";
        }
    })
}


// function setCookie(cname, cvalue,minit) {
//     const d = new Date();
//     d.setTime(d.getTime() + (minit*60* 1000));
//     let expires = "expires=" + d.toUTCString();
//     console.log(expires);
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }


  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let ca = document.cookie.split(';');
  //   console.log(ca);
  //   for(let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  // function checkCookie() {
  //   let user = getCookie("username");
  //   if (user != "") {
  //     alert("Welcome again " + user);
  //   } else {
  //      user = prompt("Please enter your name:","");
  //      if (user != "" && user != null) {
  //        setCookie("username", user, 1);
  //      }
  //   }
  // }
  // checkCookie();

