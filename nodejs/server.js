import express from "express"
import cors from "cors"
import politiciansRouter from "./router/politicians.js"

var app = express();

app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/politicians', politiciansRouter)

export default app