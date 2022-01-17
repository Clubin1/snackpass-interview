const express = require('express')
const router = express.Router();
const readXlsxFile = require('read-excel-file/node');
const randomImage = require('../utils/randomImage');

const schema = {
    'Order ID': {
        prop: 'orderId',
        type: Number
    },
    'Restaurant': {
        prop: 'store',
        type: String
    },
    'Item Name': {
        prop: 'name',
        type: String
    },
    'Quantity': {
        prop: 'quantity',
        type: Number
    },
    'Product Price': {
        prop: 'price',
        type: Number
    },
    'Total Products': {
        prop: 'totalProducts',
        type: String
    }
};

router.get('/order', (req, res) => {
    // Send cors headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // Read orders.xlsx and formats it according to the schema. Results stored in rows, errors stored in errors
    readXlsxFile('orders.xlsx', {schema}).then(({rows, errors}) => {
        // For each item, create random variables and assign these variables to current item
        for (let i = 0; i < rows.length; i++) {
            const randTime = Math.floor(Math.random() * (2881 - 0) + 0);    // random time no more than 48 hours
            const randPurchase = Math.floor(Math.random() * (51 - 1) + 1);  // random purchase num no more than 50
            const randInt = Math.floor(Math.random() * 5);                  // random int fro 1-6 used to refrence randomImage array
            // Append new key and value to current item
            rows[i].timeOrdered = randTime;
            rows[i].numPurchased = randPurchase;
            rows[i].imageURL = randomImage[randInt]
        }
        // Send result
        res.send(rows)
    });
})

module.exports = router;
