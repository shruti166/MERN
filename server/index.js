const express = require('express');
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes)

const dbString = `mongodb+srv://shruti31:4mQlp5mEqZxL8WPC@cluster0.gi7dc.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbString).then(() => {console.log('DB connected')}).catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})