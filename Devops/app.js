const express = require('express');
const app = express();

app.get('/', (req, res) =>  {
    res.send("Hello welcome to DevOps");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});