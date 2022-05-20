const express = require('express');
const { register, login, getClient, getuserinfo, getOrganisateur, getAdmin, registerOrganisateur, registerAdmin } = require('../Controllers/user.controllers');
const auth = require('../Middleware/auth');
const isAdmin = require('../Middleware/isAdmin');
const { registerRules, LoginRules, validator } = require('../Middleware/validator');
const router = express.Router();

router.post('/register', registerRules(), validator, register);
router.post('/login', LoginRules(), validator, login);
router.get('/getuserinfo', getuserinfo)

router.get('/getclient', isAdmin, getClient)
router.get('/getorganisateur', isAdmin, getOrganisateur)
router.get('/getadmin', isAdmin, getAdmin)

router.post('/registerOrganisateur', registerOrganisateur);
router.post('/registerAdmin', isAdmin, registerAdmin);

module.exports = router;