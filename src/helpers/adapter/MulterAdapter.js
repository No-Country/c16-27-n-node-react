import { Storage } from "@google-cloud/storage";
import multer from 'multer'
import dotenv from "dotenv";

dotenv.config();

const projectId = process.env.PROJECT_ID;
const keyFileName = process.env.KEYFILENAME;
const bucketName = process.env.BUCKET_NAME

console.log(projectId, keyFileName, bucketName)

const storage = new Storage({
    projectId: projectId,
    keyFilename: keyFileName,
});

const bucket = storage.bucket(bucketName);

console.log(bucket.name)

const getPublicUrl = (filename) => {
    return `https://storage.googleapis.com/${bucket.name}/${filename}`;
};

const multerGCSUploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});


const uploadToGCS = async (file) => {
    // Check file type
    // const { mime } = await fileTypeFromBuffer(file.buffer);
    // if (!mime?.startsWith('image/')) {
    //     throw new Error('Only image files are allowed');
    // }

    
    const fileUpload = bucket.file(file.originalname);
    console.log(fileUpload)
    const stream = fileUpload.createWriteStream({
        metadata: {
            contentType: file.mimetype,
        },
    });

    stream.on('error', (err) => {
        console.error('Error uploading file:', err);
    });

    stream.on('finish', async () => {
        await fileUpload.makePublic();
        const publicUrl = getPublicUrl(file.originalname);
        console.log(`File uploaded: ${publicUrl}`);
    });

    stream.end(file.buffer);
};


export {
    multerGCSUploader,
    uploadToGCS
}

