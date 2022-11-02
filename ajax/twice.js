loadDoc("https://jsonplaceholder.typicode.com/users", myFunction1);

loadDoc("https://jsonplaceholder.typicode.com/posts", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){cFunction(this)}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
    console.log(JSON.parse(xhttp.responseText));
    // cFunction(this);
 }
function myFunction2(xhttp) {
    console.log(JSON.parse(xhttp.responseText));
    // cFunction(this);
}
