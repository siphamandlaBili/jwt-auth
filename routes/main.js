const express =require('express');
const router = express.Router();
const {login,dashboard} = require('../controllers/main');

router.post('/login',login);
router.get('/dashboard',dashboard);

module.exports = router;