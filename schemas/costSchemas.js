const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  uid: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  nid: {
    type: Number,
  },
  userType: {
    type: String,
    default: "user",
  },
 
});

const costCollection = mongoose.model(
  "costCollection",
  new mongoose.Schema({}, { strict: false })
);

module.exports = costCollection;
