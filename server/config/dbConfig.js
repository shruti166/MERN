const mongoose = require('mongoose');


const dbString = `mongodb+srv://shruti31:djDX9XsSQBeNivL@cluster0.gi7dc.mongodb.net/BMS?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect((dbString).then(() => {console.log('DB connected')}).catch((err) => {
    console.log(err);
}))