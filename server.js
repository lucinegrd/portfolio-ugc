require('dotenv').config();
const path = require('path');
const express = require('express');

const port = process.env.PORT || 5000;
const app = express();
app.use(express.static(path.join(__dirname, './client/build')));

app.get('/*', function (_, res) {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 
