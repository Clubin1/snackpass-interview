const express = require('express');
const order = require('./routes/order');
const cors = require('cors');
const app = express();

app.use('/api', order);
app.use(cors());

const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server started listening on port :", PORT);
});