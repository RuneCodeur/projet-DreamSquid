const express = require ('express');
const router = express.Router();

const pictureCtrl = require('../controllers/picture');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

router.post('/newPicture', auth.getAuthPicture, multer, pictureCtrl.createPicture);
router.post('/newPictureWithDescri', auth.getAuthPictureWithDescri, multer, pictureCtrl.createPictureWithDescri);
router.get('/all', pictureCtrl.all);
router.get('/onePicture', pictureCtrl.onePicture);

module.exports = router;