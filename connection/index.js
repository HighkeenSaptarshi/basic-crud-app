const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('MONGO CONNECTED: ', connectionInstance.connection.host);
    } catch (error) {
        console.log('ERROR: connecting Mongo DB ', error);
        process.exit(1);
    }
}


module.exports = connectDB;