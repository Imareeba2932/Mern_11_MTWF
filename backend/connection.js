const mongoose = require('mongoose');
const url = "mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/db-11?retryWrites=true&w=majority&appName=AtlasApp"
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;