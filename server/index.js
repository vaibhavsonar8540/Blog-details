const express = require("express")
const cors = require("cors")
const connectTODb = require("./utils/db")
const blogRouter = require("./routes/blog.router")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors({

    origin:"http://localhost:5173",
    Credential:true
}
))


app.get("/", (req, res) => {
    res.send("API IS WORKING")
})

app.use("/api/blog/", blogRouter)



app.listen(process.env.PORT || 3000, async() => {
    try {
        connectTODb();
        console.log(">>>>>>>>>>>>>>>>>>>> SERVER IS RUNNING <<<<<<<<<<<<<<<<<<<<")
    } catch (error) {
        console.log("Error to connect", error)
    }
})