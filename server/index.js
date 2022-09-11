import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

app.use("/posts", postRoutes)
app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.send("app is running")
})
// DataBaseConection //////////////////////////////////////////

const PORT = process.env.PORT || 1234;

mongoose.connect(process.env.CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log("Server running")))
.catch((error) => console.log(error.message))

//////////////////////////////////////////////////////////////

