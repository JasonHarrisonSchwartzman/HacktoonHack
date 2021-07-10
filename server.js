//run with 'npm start' command in terminal -- runs on localhost:3000

const port = 3000;
const express = require('express');
const app = express();
const server = app.listen(port);

app.use(express.static('public', () => {
    console.log("Ready to go!");
}));

console.log(`Running on port http://localhost:${port}`);