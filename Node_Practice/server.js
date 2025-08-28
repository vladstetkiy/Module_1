const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/your/dad/is/gay', (request, response) => {
  response.send('wtf are you googling?');
});
app.get('/your/mom/is/gay', (request, response) => {
  response.send('bro.....');
});
app.get('/NameOfMyMomIs/:momsName', (req, response) => {
  response.send(req.params.momsName + ' is a brillian woman');
});
app.get('/html', (req, res) => {
  try {
    res.sendFile("index.html", { root: __dirname });
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));