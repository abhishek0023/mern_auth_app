const mongoose = require('mongoose');

const mongo_url = process.env.DB;


// connection
mongoose.connect(mongo_url).then(()=>{
    console.log("Connected to MongoDB..");
}).catch((err)=>{
    console.log("DB Connection Error: ",err);
})

