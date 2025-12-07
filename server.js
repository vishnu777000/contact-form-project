const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const newEntry = { name, email, message };

   
    let data = [];
    if (fs.existsSync('./data/messages.json')) {
        data = JSON.parse(fs.readFileSync('./data/messages.json'));
    }

    data.push(newEntry);

    fs.writeFileSync('./data/messages.json', JSON.stringify(data, null, 2));

    res.json({ status: "success", message: "Form submitted!" });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
