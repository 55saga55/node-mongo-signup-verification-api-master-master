let array = []

const loadData = async () => {

    let getData = await fetch("http://localhost:4000/accounts", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmRhNGU1YzIwYWIxMzA5MGMzOGFkYzUiLCJpZCI6IjYyZGE0ZTVjMjBhYjEzMDkwYzM4YWRjNSIsImlhdCI6MTY1ODc2NDEyMywiZXhwIjoxNjU4NzkzNTIzfQ.81R0Rj5OTTcTuoE-1txNpSaRTGpdVwyUyHZFGyeTImc`
        }
    });
    
    let jsonData = getData.json();
    
    jsonData.then(y=>{
        array = y;
        postMessage(array);
        setTimeout("loadData()",500);
    });

}

loadData();