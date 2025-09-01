const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(() => {
        console.log("connected to mongoDB");
    }).catch((err) => {
        console.log("error connecting to mongoDB", (err));
    })
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ 
        ...obj, 
        owner: "68b0180e7c3b2c50f8b076e0",
    }));
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
}
initDB();