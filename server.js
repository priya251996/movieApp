const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./angular/create/src'));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/create/src/index.html'));

});
app.listen(process.env.PORT || 8080, () => {
    console.log('server staerted');
})