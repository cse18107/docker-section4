const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send({
        message: 'application is working'
    });
});

app.listen(8080,()=>{
    console.log('application is working on port 8080');
})