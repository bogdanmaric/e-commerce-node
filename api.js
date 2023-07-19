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
  const merchantID = "Payment-" + generateRandomString(40);
  try {
    const data = {
        ACTION: "SESSIONTOKEN",
        MERCHANTUSER: "api.test@payten.com",
        MERCHANTPASSWORD: "Hephr=R4SKNycaLf",
        MERCHANT: "chipcardtest01",
        CUSTOMER: "Ivko Ivić",
        SESSIONTYPE: "PAYMENTSESSION",
        MERCHANTPAYMENTID: `${merchantID}`,
        AMOUNT: 2598.00,
        CURRENCY: "USD",
        CUSTOMEREMAIL: "customerEmail-UCUoumJV",
        CUSTOMERNAME: "CustomerNameUCUoumJV",
        CUSTOMERPHONE: 11111111111111,
        RETURNURL: "https://e-commerce-jvdw.onrender.com/success/#result",
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