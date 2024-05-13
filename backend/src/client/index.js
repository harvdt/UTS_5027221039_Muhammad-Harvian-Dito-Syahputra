// import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

import { appListener } from "./config/earthquake.config.js"

import earthquakeRoute from "./routes/earthquake.route.js"

dotenv.config()

const app = express()

app.use(express.json())

// auth
app.use(cors())

// routes
app.use(earthquakeRoute)

// listener
app.listen(3000, appListener)