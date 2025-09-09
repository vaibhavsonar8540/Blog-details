const mongoose = require("mongoose")
require("dotenv").config()

async function connectTODb(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(">>>>>>>>>>>>>>>>>>>> Connected To Database <<<<<<<<<<<<<<<<<<<<")
        // console.log(`Server is connected to ${process.env.MONGO_URL + "blog-detail"}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectTODb;