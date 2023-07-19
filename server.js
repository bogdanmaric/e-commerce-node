const express = require('express');
const axios = require('axios');
const api = require("./api");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); // View engine EJS

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/payment', async (req, res) => {
  try {
    const responseData = await api.apiSessionTokenRequest();
    const token = responseData["sessionToken"];
    const url = "https://entegrasyon.asseco-see.com.tr/chipcard/pay3d/" + token;
    res.redirect(url);
  } catch (error) {
    res.status(500).json({ error: 'Error with API call' })
  }
});

app.post('/success', async (req, res) => {
  const formData = req.body;
  res.render('index', { data: formData});
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});