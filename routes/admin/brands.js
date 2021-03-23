const mongoose = require('mongoose');
const viewBrandsTemplate = require('../../views/admin/brands/index');
const addBrandTemplate = require('../../views/admin/brands/new');
const editBrandTemplate = require('../../views/admin/brands/edit');
const {Brand, validate} = require('../../models/admin/brands');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const brands = await Brand.find().sort('brandName');
    res.send(viewBrandsTemplate({brands}));
});

router.get('/new', (req, res) => {
    res.send(addBrandTemplate());
});

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const brand = new Brand({
        brandName: req.body.name
    })

    await brand.save();

    res.redirect('/admin/brands');
});

router.get('/edit/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const brand = await Brand.findById(req.params.id);
    if (!brand) return res.status(400).send(`Sorry, that brand doesn't exist`);

    res.send(editBrandTemplate({brand}));
});

router.post('/edit/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const brand = await Brand.findByIdAndUpdate(req.params.id, {
        brandName: req.body.name
    }, {new: true});
    if (!brand) return res.status(400).send(`Sorry, that brand doesn't exist`);

    res.redirect('/admin/brands');
});

router.post('/delete/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(400).send(`Sorry, that brand doesn't exist`);

    res.redirect('/admin/brands');
})

module.exports = router;