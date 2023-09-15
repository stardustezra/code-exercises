const https = require("https")

let jsonRes = null
https.get("https://jsonplaceholder.typicode.com/todos/1", resp => {
    let data = '';
    resp.on('data', chunk => { data += chunk}); 
    resp.on('end', () => jsonRes = JSON.parse(data))}
)