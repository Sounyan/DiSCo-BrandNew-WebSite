const express = require('express');
const path = require("path");
const app = express();
app.get('/new_parallax.webp', function (req, res) {
    res.sendFile('/new_parallax.webp', { root: path.join(__dirname, './') });
})
app.use(express.static('./view'));

app.listen(3000, () => {
  console.log('server started');
});