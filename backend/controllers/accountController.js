// controllers/accountController.js
const Account = require('../models/account');

// Create a new account
exports.createAccount = async (req, res) => {
  try {
    const { accountName } = req.body;
    const newAccount = new Account({ accountName });
    await newAccount.save();
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create account' });
  }
};

// Get account by ID
exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching account' });
  }
};
