const mongoose = require('mongoose');
const viewSpecialTemplate = require('../../views/admin/special/index');
const addSpecialCategoryTemplate = require('../../views/admin/special/new');
const editspecialTemplate = require('../../views/admin/special/edit');
const {Specialcategory, validate} = require('../../models/admin/specialCategories');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const specialcategory = await Specialcategory.find().sort('specialCategoriesName');
    res.send(viewSpecialTemplate({specialcategory}));
});

router.get('/new', (req, res) => {
    res.send(addSpecialCategoryTemplate());
});

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const specialcategory = new Specialcategory({
        specialCategoriesName: req.body.specialCategoriesName
    })
    await specialcategory.save();

    res.redirect('/admin/specialCategories');
});

router.get('/edit/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const specialcategory = await Specialcategory.findById(req.params.id);
    if (!specialcategory) return res.status(400).send(`Sorry, that specialcategory doesn't exist`);

    res.send(editspecialTemplate({specialcategory}));
});

router.post('/edit/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const spCategory = await Specialcategory.findByIdAndUpdate(req.params.id, {
        specialCategoriesName: req.body.specialCategoriesName
    }, {new: true});
    if (!spCategory) return res.status(400).send(`Sorry, that brand doesn't exist`);

    res.redirect('/admin/specialCategories');
});

router.post('/delete/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const spCategory = await Specialcategory.findByIdAndDelete(req.params.id);
    if (!spCategory) return res.status(400).send(`Sorry, that Specialcategory doesn't exist`);

    res.redirect('/admin/specialCategories');
})

module.exports = router;