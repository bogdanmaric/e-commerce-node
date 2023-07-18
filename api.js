const axios = require('axios');

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const apiSessionTokenRequest = async () => {

  try {
    const data = {
        ACTION: "SESSIONTOKEN",
        MERCHANTUSER: "api.test@payten.com",
        MERCHANTPASSWORD: "Hephr=R4SKNycaLf",
        MERCHANT: "chipcardtest01",
        CUSTOMER: "Customer-UCUoumJV",
        SESSIONTYPE: "PAYMENTSESSION",
        MERCHANTPAYMENTID: "Payment-" + generateRandomString(40),
        AMOUNT: 2598.00,
        CURRENCY: "USD",
        CUSTOMEREMAIL: "customerEmail-UCUoumJV",
        CUSTOMERNAME: "CustomerNameUCUoumJV",
        CUSTOMERPHONE: 11111111111111,
        RETURNURL: "http://localhost:3030/success",
        SESSIONTYPE: "PAYMENTSESSION",
        ORDERITEMS: [
          {
          "code": "C01E3AITIC",
          "name": "Sony A7 IV",
          "description": "Camera",
          "quantity": 1,
          "amount": 2598.00
          }
        ]
      };

      const header = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
      };

      const response = await axios.post('https://entegrasyon.asseco-see.com.tr/msu/api/v2', data, header);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
};

module.exports = {
    apiSessionTokenRequest
};