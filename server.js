const express = require('express');
const path = require('path');

const app = express();
const port = 2000;

app.get('/test.svg', (req, res) => {
res.sendFile(path. join(__dirname, 'test.svg'));
});

console.log('Reached line 1');

app.get('/test.xsl', (req, res) => {
res.set('Access-Control-Allow-Origin', '*');
res.sendFile(path. join(__dirname, 'test.xsl'));
});

console.log('Reached line 2');

app. listen(port, () => {
console. log(`Start listening on port ${port} `);
});

