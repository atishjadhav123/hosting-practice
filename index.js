const express = require("express")
require("dotenv").config()


const app = express()
app.use(express.static("dist"))
app.use("/api/users", (req, res) => {
    res.json({ message: "user fetch Success" })
})
app.use("*", (req, res) => {
    res.status(404).json({ message: "resorce not Success" })
})

app.listen(process.env.PORT || 5000, console.log("SERVER CONNECTED"))