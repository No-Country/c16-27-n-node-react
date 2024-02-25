import express from "express";
import dotenv from "dotenv";
import multer from 'multer'
import { Storage } from "@google-cloud/storage";
// import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'node:path'
import { dirname } from "path"
import connectionDB from "./src/config/db.js";
import eventRoute from "./src/routes/eventRoute.js";
// import fileRoutes from "./src/routes/fileRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const src = path.join(__dirname, "views");

// MIDDLEWARE
// app.use(cors());
dotenv.config();

app.use(express.static(src));
app.use(express.json());

app.use('/api', eventRoute);


// app.use('/files', fileRoutes)
connectionDB();

const multerGCSUploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // No larger than 5mb, change as you need
    },
});

const projectId = process.env.PROJECT_ID;
const keyFileName = process.env.KEYFILENAME;
const bucketName = process.env.BUCKET_NAME

const storage = new Storage({
    projectId: projectId,
    keyFilename: keyFileName
});
const bucket = storage.bucket(bucketName); // Get this from Google Cloud -> Storage

//Prueba de conexión API
app.get("/", (req, res) => {
    // console.log(req.baseUrl);
    // res.send(`<h1>Welcome to MeetHub Api</h1> ${req.baseUrl}`)
    res.sendFile(__dirname + "/index.html");
})

app.get("/upload", async (req, res) => {
    try {
        const [files] = await bucket.getFiles();
        res.send([files]);
        console.log("Success");
    } catch (error) {
        res.send("Error:" + error);
    }
});


app.post("/upload", multerGCSUploader.single('imgfile'), (req, res) => {
    console.log("Made it /upload");
    try {
        if (req.file) {
            console.log("File found, trying to upload...");
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream();

            blobStream.on("finish", () => {
                res.status(200).send("Success");
                console.log("Success");
            });
            blobStream.end(req.file.buffer);
        } else throw "error with img";
    } catch (error) {
        res.status(500).send(error);
    }
});




app.listen(PORT, () => {
    console.log(`Server working to the port ${PORT}`)
})

