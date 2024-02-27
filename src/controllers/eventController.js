import { multerGCSUploader, uploadToGCS } from '../helpers/adapter/MulterAdapter.js';
import eventService from './../services/eventService.js';

// const newEvent = new Event({
//     title: 'Tech Conference',
//     description: 'A conference for tech enthusiasts',
//     image: 'https://example.com/event.jpg',
//     date: new Date('2024-06-01'),
//     type: 'in-person',
//     maxAttendees: 500,
//     location: 'New York City',
//     createdBy: newUser._id,
//     participants: []
//   });

const find = (req, res) => {
    eventService
        .find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const findById = (req, res) => {

    const { id } = req.params;

    eventService
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const save = (req, res) => {

    const body = req.body;

    eventService
        .save(body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const deleteOne = (req, res) => {

    const { id } = req.params;

    eventService
        .deleteOne(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};


const updateImage = (req, res) => {
    multerGCSUploader.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const publicUrl = await uploadToGCS(req.file, res);
            res.status(200).json({ publicUrl });
        } catch (err) {
            console.error('Error uploading file:', err);
            res.status(500).json({ error: 'Failed to upload file' });
        }
    });
};

const some = (req, res) => {
    res.json({msg: "Connected to backend"})
}


// const updateImage = (req, res) => {
//     multerGCSUploader.single('file')(req, res, async (err) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }

//         if (!req.file) {
//             return res.status(400).json({ error: 'No file uploaded' });
//         }

//         try {
//             await uploadToGCS(req.file);
//             res.status(200).json({ publicUrl });
//         } catch (err) {
//             console.error('Error uploading file:', err);
//             res.status(500).json({ error: 'Failed to upload file' });
//         }
//     })

//     // try {
//     //     const myFile = req.file;
//     //     console.log(myFile);
//     //     // uploadToGCS(req.file)
//     //     //     .then((publicUrl) => {
//     //     //         console.log('File uploaded successfully. Public URL:', publicUrl);
//     //     //         res.status(200).json({ publicUrl });
//     //     //     })
//     //     //     .catch((error) => {
//     //     //         console.error('Error uploading file:', error);
//     //     //         res.status(500).json({ error: 'Error uploading file' });
//     //     //     });


//     // } catch (error) {
//     //     next(error)
//     // }
// }

export default {
    find,
    findById,
    save,
    deleteOne,
    updateImage,
    some
};
