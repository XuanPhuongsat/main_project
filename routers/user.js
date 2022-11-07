const express = require('express');
const router = express.Router();
const user = require('../controllers/user');
router.get('/login',user.login_get);

router.get('/register',user.register_get);
router.post('/register',user.register_post);
module.exports = router;