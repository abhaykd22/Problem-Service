const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("./server.config");
async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(MONGO_URI);
    }
  } catch (err) {
    console.log("Unable to connect to data base server");
    console.log(err);
  }
}
module.exports = connectToDB;
