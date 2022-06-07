const Transaction = require('../models/Transaction');

// Get all transactions
// @ route: GET /ap1/v1/transactions
// @ access: Public

const req = require("express/lib/request");
const res = require("express/lib/response");

exports.getTransactions = async(req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// Add Transaction
// @ route: POST /ap1/v1/transactions
// @ access: Public

exports.addTransaction = async(req, res, next) => {

    try {
  
     const { text, amount} = req.body;

     const transaction = await Transaction.create(req.body);

     return res.status(201).json({
         success: true,
         data: transaction
     });
        
    } catch (err) {
        console.log(err);
    }

}

// Delete Transaction
// @ route: DELETE /ap1/v1/transactions:id
// @ access: Public

exports.deleteTransaction = async(req, res, next) => {
    res.send('DELETE transaction')
}
