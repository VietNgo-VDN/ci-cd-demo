const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Test #2: CI/CD Demo');
});

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
