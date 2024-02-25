import { multerGCSUploader, uploadToGCS } from "../helpers/adapter/MulterAdapter.js";

class FileController {
    uploadFile(req, res) {
        multerGCSUploader.single('file')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            try {
                await uploadToGCS(req.file);
                res.json({ message: 'File uploaded successfully' });
            } catch (err) {
                console.error('Error uploading file:', err);
                res.status(500).json({ error: 'Failed to upload file' });
            }
        });
    }
}

export default new FileController();