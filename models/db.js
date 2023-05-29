const mongoose = require("mongoose")

mongoose.set("strictQuery", true);


const dbURL = process.env.DB_ACCESS


mongoose.connect(dbURL, { useNewUrlParser: true})

mongoose.connection.on('connected',()=>{
    console.log(`Mongoose connection to ${dbURL}`);
})

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});


mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

    