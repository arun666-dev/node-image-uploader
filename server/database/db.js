const mongoose = require("mongoose");
const config = require("../../config");

const connect = async () => {
  try {
    // mongodb cloud connection
    const conn = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
