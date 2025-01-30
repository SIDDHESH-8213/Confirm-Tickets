const processPayment = async (userId, amount) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) {
          resolve({ success: true, transactionId: `txn_${Date.now()}` });
        } else {
          reject(new Error('Payment failed'));
        }
      }, 1000);
    });
  };
  
module.exports = { processPayment };