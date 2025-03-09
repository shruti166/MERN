const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes)

const dbString = `mongodb+srv://shruti31:4mQlp5mEqZxL8WPC@cluster0.gi7dc.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbString).then(() => {console.log('DB connected')}).catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})