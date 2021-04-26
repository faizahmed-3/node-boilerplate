const {productImagesUpload} = require('../../middlewares/multer');
const {Category} = require('../../models/admin/categories');
const {Brand} = require('../../models/admin/brands');
const {Special} = require('../../models/admin/special');
const _ = require('lodash');
const mongoose = require('mongoose');
const {Product, validate} = require('../../models/admin/products');
const addProductTemplate = require('../../views/admin/products/new');
const viewProductsTemplate = require('../../views/admin/products/index');
const editProductTemplate = require('../../views/admin/products/edit')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find().sort('product_name');
    res.send(viewProductsTemplate({products}));
});

router.get('/new', async (req, res) => {
    const categories = await Category.find().select('_id category_name').sort('category_name');
    const brands = await Brand.find().select('_id brand_name subBrands').sort('brand_name');
    const specials = await Special.find().select('_id special_name subBrands').sort('special_name');

    res.send(addProductTemplate({categories, brands, specials}));
});

router.post('/', productImagesUpload, async (req, res) => {
    const categories = await Category.find().select('_id category_name').sort('category_name');
    const brands = await Brand.find().select('_id brand_name subBrands').sort('brand_name');
    const specials = await Special.find().select('_id special_name subBrands').sort('special_name');

    const {error} = validate(req.body);
    if (error) return res.send(addProductTemplate({
        input: req.body,
        error: error.details[0],
        categories,
        brands,
        specials
    }))

    const product_images = []
    const reqFiles = []
    const fileKeys = Object.keys(req.files);
    fileKeys.forEach(function (key) {
        reqFiles.push(req.files[key]);
    });
    reqFiles.forEach(image => {
        product_images.push(image[0])
    })

    function checkSubBrand(id) {
        if (id.includes('-')) {
            const splitted = id.split('-');
            req.body.brandID = splitted[0]
            req.body.subBrandID = splitted[1]
        }
    }
    checkSubBrand(req.body.brandID);

    const product = new Product(
        _.pick(req.body,
            ['product_name', 'categoryID', 'brandID', 'subBrandID', 'specialID', 'colour', 'material', 'description', 'inBox', 'quantity', 'shop_price', 'price', 'discount_price', 'status'])
    );

    product.product_images = product_images;

    product.types = 1;

    await product.save();

    await Category.findByIdAndUpdate(product.categoryID, {
        $inc: { types: 1 }
    }, {new: true} )

    await Special.findByIdAndUpdate(product.specialID, {
        $inc: { types: 1 }
    }, {new: true} )

    await Brand.findByIdAndUpdate(product.brandID, {
        $inc: {types: 1}
    }, {new: true})
    if (product.subBrandID) {
        const brand = await Brand.findById(product.brandID)
        let subBrand = brand.subBrands.id(product.subBrandID)
        subBrand.set(subBrand.types++)

        await brand.save()
    }

    res.send(product)

    // res.redirect('/admin/products');
});

router.get('/edit/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).send(`Sorry, that product doesn't exist`);

    res.send(editProductTemplate({product}));
});

router.post('/edit/:id', async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');


    const product = await Product.findByIdAndUpdate(req.params.id,
        _.pick(req.body, ['productName', 'colour', 'material', 'quantity', 'price', 'discountPrice', 'discountStart', 'discountEnd', 'status']),
        {new: true});
    if (!product) return res.status(404).send(`Sorry, that product doesn't exist`);


    res.redirect('/admin/products');
});

router.post('/delete/:id', async (req, res) => {
    const valid = mongoose.isValidObjectId(req.params.id);
    if (!valid) return res.status(400).send('Invalid ID passed');

    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send(`Sorry, that product doesn't exist`);

    res.redirect('/admin/products');
})

module.exports = router;