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

// const getPublicUrl = (filename) => {
//     return `https://storage.googleapis.com/${bucket.name}/${filename}`;
// };

const multerGCSUploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});


// const uploadToGCS = async (file) => {
//     // Check file type
//     // const { mime } = await fileTypeFromBuffer(file.buffer);
//     // if (!mime?.startsWith('image/')) {
//     //     throw new Error('Only image files are allowed');
//     // }

    
//     const fileUpload = bucket.file(file.originalname);
//     console.log(fileUpload)
//     const stream = fileUpload.createWriteStream({
//         metadata: {
//             contentType: file.mimetype,
//         },
//     });

//     stream.on('error', (err) => {
//         console.error('Error uploading file:', err);
//     });

//     stream.on('finish', async () => {
//         await fileUpload.makePublic();
//         const publicUrl = getPublicUrl(file.originalname);
//         console.log(`File uploaded: ${publicUrl}`);
//     });

//     stream.end(file.buffer);
// };


// const uploadToGCS = async ( file ) => {
//     console.log("Made it /upload");
//     const fileUpload = bucket.file(file.originalname);
//     const stream = fileUpload.createWriteStream();

//     stream.on('error', (err) => {
//         console.log('Error uploading file: ', err);
//     })

//     stream.on('finish', async () => {

//         fileUpload.makePublic();
//         const publicUrl = fileUpload.publicUrl();
//         console.log(`Public URL for ${fileUpload.name}: ${publicUrl}`)
//     })

//     stream.end(file.buffer);
// }


const uploadToGCS = (file) => {
    console.log("Made it /upload");

    return new Promise((resolve, reject) => {
        const filePath = 'Events' + '/' + file.originalname;
        const fileUpload = bucket.file(filePath);
        const stream = fileUpload.createWriteStream();
        console.log(bucket.name);
        stream.on('error', (err) => {
            console.log('Error uploading file: ', err);
            reject(err);
        });

        stream.on('finish', async () => {
            try {
                // await fileUpload.makePublic();
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`;
                console.log(`Public URL for ${fileUpload.name}: ${publicUrl}`);
                resolve(publicUrl);
            } catch (error) {
                console.log('Error making file public: ', error);
                reject(error);
            }
        });

        stream.end(file.buffer);
    });
};



export {
    multerGCSUploader,
    uploadToGCS
}

