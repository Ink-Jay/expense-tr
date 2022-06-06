// Get all transactions
// @ route: GET /ap1/v1/transactions
// @ access: Public

const req = require("express/lib/request");
const res = require("express/lib/response");

exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// Add Transaction
// @ route: POST /ap1/v1/transactions
// @ access: Public

exports.addTransaction = (req, res, next) => {
    res.send('POST transaction')
}

// Delete Transaction
// @ route: DELETE /ap1/v1/transactions:id
// @ access: Public

exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction')
}
