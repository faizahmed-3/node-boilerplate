const addNewProductTemplate = require('../../views/admin/products/new');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(addNewProductTemplate());
});

module.exports = router;