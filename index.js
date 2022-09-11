import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path'

dotenv.config()

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

app.use("/posts", postRoutes)
app.use("/user", userRoutes)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("/*", (req, res) => {
 res.sendFile(path.join("client/build", "index.html"));
});
// DataBaseConection //////////////////////////////////////////

const PORT = process.env.PORT || 1234;

mongoose.connect(process.env.CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log("Server running")))
.catch((error) => console.log(error.message))

//////////////////////////////////////////////////////////////

