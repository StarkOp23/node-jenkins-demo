const express = require('express');

let app = express();
app.use(express.json());

//! Middleware
app.use(((req, res, next) => {
    console.log(`${req.url} ${req.method}`);
    next();
}))
app.get('/get', (req, res) => {
    res.status(200).send('Dockerfile is running')
})
app.get('/info', (req, res) => {
    res.json({
        "status": 200,
        "name": "Backend Learning",
        "day": 1
    }
    )
})



app.listen(8000, () => {
    console.log("Server is running");
})