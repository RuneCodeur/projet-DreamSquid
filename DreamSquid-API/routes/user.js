const express = require ('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const mail = require('../middleware/nodeMailer');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup, mail.createUser);
router.get('/login', userCtrl.login);
router.put('/validMail', userCtrl.validmail);
router.put('/modifyPseudo', auth.getAuth , userCtrl.modifpseudo);
router.put('/modifyMail', auth.getAuth , userCtrl.modifmail);
router.put('/modifyPassword', auth.getAuth , userCtrl.modifpassword);
router.put('/modifyPicture', auth.getAuth , userCtrl.modifpicture);
router.get('/myDescri', auth.getAuth , userCtrl.mydescri);
router.get('/numberDescri', auth.getAuth , userCtrl.numberdescri);
router.get('/selectDescri', auth.getAuth , userCtrl.selectdescri);
router.get('/lastDescri', auth.getAuth , userCtrl.lastdescri);
router.delete('/descri', auth.getAuth , userCtrl.deletedescri);

module.exports = router;