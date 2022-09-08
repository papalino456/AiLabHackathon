import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

app.use("/posts", postRoutes)
// DataBaseConection //////////////////////////////////////////

const CONECTION_URL = 'mongodb+srv://papalino456:sebastianpapalino456@cluster0.1efkxdl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 1234;

mongoose.connect(CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log("Server running")))
.catch((error) => console.log(error.message))

//////////////////////////////////////////////////////////////

