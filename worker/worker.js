let array = []

const loadData = async () => {

    let getData = await fetch("http://localhost:4000/accounts", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmUwYmY5ZDgwYWExMzNkZTgyMWRhZDMiLCJpZCI6IjYyZTBiZjlkODBhYTEzM2RlODIxZGFkMyIsImlhdCI6MTY1ODg5NjMzOCwiZXhwIjoxNjU4ODk3MjM4fQ.TDzAIdKTOZrXTeLLfsJHh0VxYPRBmuy7Nlz3iPZs6fc`
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