import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionDB from "./src/config/db.js";


const app = express();
// app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000

connectionDB();

app.listen(PORT, () => {
    console.log(`Server working to the port ${PORT}`)
})

