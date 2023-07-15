const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.get('/api', (req, res) => {
  const requestData = {
    ACTION: "SESSIONTOKEN",
    MERCHANTUSER: "api.test@payten.com",
    MERCHANTPASSWORD: "Hephr=R4SKNycaLf",
    MERCHANT: "chipcardtest01",
    CUSTOMER: "Customer-UCUoumJV",
    SESSIONTYPE: "PAYMENTSESSION",
    MERCHANTPAYMENTID: "Payment-UCUoumJV",
    AMOUNT: 10.00,
    CURRENCY: "TRY",
    CUSTOMEREMAIL: "customerEmail-UCUoumJV",
    CUSTOMERNAME: "CustomerNameUCUoumJV",
    CUSTOMERPHONE: 11111111111111,
    RETURNURL: "http://merchantReturnUrl",
    SESSIONTYPE: "PAYMENTSESSION",
    ORDERITEMS: [
      {
      "code": "T00D3AITCC",
      "name": "Galaxy Note 3",
      "description": "Description of Galaxy Note 3",
      "quantity": 2,
      "amount": 449.99
      },
      {
      "code": "B00D9AVYBM",
      "name": "Samsung Galaxy S III",
      "description": "Samsung Galaxy S III (S3) Triband White (Boost Mobile)",
      "quantity": 1,
      "amount": 149.95
      },
      {
      "code": "B00NQGP5M8",
      "name": "Apple iPhone 6",
      "description": "Apple iPhone 6, Gold, 64 GB (Unlocked) by Apple",
      "quantity": 1,
      "amount": 139.95
      },
      {
      "code": "B00U8KSUIG",
      "name": "Samsung Galaxy S6",
      
      "description": "Samsung Galaxy S6 SM-G920F 32GB (FACTORY UNLOCKED) 5.1 QHDBlack-InternationalVersion",
      
      "quantity": 1,
      "amount": 129.95
      }
    ]
  };


  axios.post('https://entegrasyon.asseco-see.com.tr/msu/api/v2', requestData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error occurred' });
    });
});

/*const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});*/

const PORT = process.env.PORT || 3030;

// your code

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
