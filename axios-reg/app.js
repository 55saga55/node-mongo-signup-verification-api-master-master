function save() {

    var object = {

        title: document.getElementById("title").value,
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmpassword").value,
        acceptTerms: true

    }

    axios.post('http://localhost:4000/accounts/register',object)
        .then( y => {
            console.log(y);
            window.location.href = "/axios-reg/Alogin.html"
        })
}