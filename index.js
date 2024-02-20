import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionDB from "./src/config/db.js";
import eventRoute from "./src/routes/eventRoute.js"

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARS
// app.use(cors());
dotenv.config();
app.use(express.json());
app.use('/api',eventRoute);

connectionDB();


//Prueba de conexión API
app.get("/", (req, res) => {
    console.log(req.baseUrl);
    res.send(`<h1>Welcome to MeetHub Api</h1> ${req.baseUrl}`)
})

app.listen(PORT, () => {
    console.log(`Server working to the port ${PORT}`)
})

