require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
    // const connection = mongoose.connection;
    // connection.then(() => console.log('Connected Successfully'))
    // }).catch((err) => console.error('Not Connected'));
    // });
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;