const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbString = `mongodb+srv://shruti31:4mQlp5mEqZxL8WPC@cluster0.gi7dc.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbString).then(() => {console.log('DB connected')}).catch((err) => {
    console.log(err);
})


app.listen(8082, () => {
    console.log('Server running on port 8082')
})