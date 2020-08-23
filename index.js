const express = require('express');
const app = express();
const port = 3000;

let logs;

app.use(express.json());

app.get('/health', (request, response) =>{
    response.send('Healthy');
});

app.get('/logs', (request, response) =>{
    result = logs || 'No logs saved';
    response.send(JSON.stringify(result));
});

app.post('/', (request, response)=>{
    const {log} = request.body;
    if(!logs){
        logs = [log];
    }
    else{
        logs.push(log);
    }
    response.send('Success!');
});

app.listen(port, () => {
    console.log(`Simple API Listening at http://localhost:${port}`);
});