import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionDB from "./src/config/db.js";
import eventRoute from "./src/routes/eventRoute.js"


const app = express();
// app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;

app.use('/api',eventRoute);

app.get("/", (req, res) => {
    console.log(req.baseUrl);
    res.send(`<h1>Welcome to MeetHub Api</h1> ${req.baseUrl}`)
})

connectionDB();

app.listen(PORT, () => {
    console.log(`Server working to the port ${PORT}`)
})

