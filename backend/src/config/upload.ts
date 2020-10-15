import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const filename = `${new Date().getUTCMilliseconds()}-${
        file.originalname
      }`;

      cb(null, filename);
    },
  }),
};
