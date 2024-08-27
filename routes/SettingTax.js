 const express = require('express');
const router = express.Router();

router.post('/SettingTaxCreate', settingTaxCreate)
router.get('/SettingTaxGet',     GetSettinTax)


module.exports = router

 