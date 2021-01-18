import multer from 'multer'
import path from 'path'
import { v4 } from 'uuid'


const uploadDirectory = "./uploader";


const diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDirectory)
  },
  filename: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname);
    const filename = `${v4()}${fileExtension}`;
    callback(null, filename);
  },
});


export const diskUploader = multer({ storage: diskStorage });
