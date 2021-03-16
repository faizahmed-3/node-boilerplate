const express = require('express');
const adminProducts = require('../routes/admin/products');


module.exports = function (app) {
    app.use(express.json());
    app.use('/admin/products', adminProducts);
}