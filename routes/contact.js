const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('at contact us page')
})

module.exports = router;