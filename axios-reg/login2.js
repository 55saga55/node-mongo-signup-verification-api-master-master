function loadData() {
    var obj = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

    }

    axios.post("http://localhost:4000/accounts/authenticate",obj,{
        
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer` 
        }
    }).then(y => {
        console.log(y);
        localStorage.setItem("data", JSON.stringify(y.data));
        window.location.href = "/axios-reg/mainpage.html"
    })

    
}



