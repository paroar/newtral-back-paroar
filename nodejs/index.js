import dotenv from "dotenv"
import app from "./server.js"
import mongoose from "mongoose"

dotenv.config()

const URI = process.env.DB_CONNECTION
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () =>
    console.log("Connected to DB")
)

const PORT = process.env.NODE_PORT
app.listen(PORT, () => console.log(`Listening on ${PORT}`))