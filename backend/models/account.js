// models/account.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountName: { type: String, required: true },
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
