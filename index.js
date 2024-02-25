import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectionDB from "./src/config/db.js";
import eventRoute from "./src/routes/eventRoute.js";
import userRoute from "./src/routes/userRoute.js";
//import {createError} from "./src/helpers/error.js"

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARS
// app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api", eventRoute);
app.use("/api", userRoute);
//app.use(createError);

connectionDB();

//Prueba de conexión API
app.get("/", (req, res) => {
  console.log(req.baseUrl);
  res.send(`<h1>Welcome to MeetHub Api</h1> ${req.baseUrl}`);
});

app.listen(PORT, () => {
  console.log(`Server working to the port ${PORT}`);
});
