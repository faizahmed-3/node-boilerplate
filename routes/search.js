const {getModals} = require('../middlewares/otherFunctions');
const {Brand} = require('../models/admin/brands');
const {Wishlist} = require('../models/wishlist');
const {Cart} = require('../models/cart');
const searchTemplate = require('../views/search');
const {Product} = require('../models/admin/products');
const express = require('express');
const router = express.Router();

async function ssPagination1(req, res, products) {
    if (products.length < 1){
        throw new Error('No product found')
    }

    const resultsPerPage = 10;

    const numOfResults = products.length;

    const numberOfPages = Math.ceil(numOfResults / resultsPerPage);


    let page = req.query.page ? Number(req.query.page) : 1;
    if (page > numberOfPages) {
        res.redirect('/search?page=' + encodeURIComponent(numberOfPages));
    } else if (page < 1) {
        res.redirect('/search?page=' + encodeURIComponent('1'));
    }

    const startingLimit = (page - 1) * resultsPerPage;

    return [page, startingLimit, numberOfPages, resultsPerPage]
}

async function ssPagination2(products, page, numberOfPages) {
    let iterator = (page - 5) < 1 ? 1 : page - 5;
    let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
    if (endingLink < (page + 4)) {
        iterator -= (page + 4) - numberOfPages;
    }

    return [iterator, endingLink]
}

router.get('/', async(req, res) => {
    if (!req.session.sortBy){
        req.session.sortBy = 'product_name'
    }

    let query

    if (req.query.query){
       query =  req.query.query
        req.session.query = req.query.query
    } else {
        query = req.session.query
    }


    let products = await Product.find({product_name: new RegExp('.*' + query + '.*', 'i'), status: true}).sort(req.session.sortBy);

    let [page, startingLimit, numberOfPages, resultsPerPage] = await ssPagination1(req, res, products)

    products = await Product.find({product_name: new RegExp('.*' + query + '.*', 'i'), status: true}).skip(startingLimit).limit(resultsPerPage).sort(req.session.sortBy);

    let [iterator, endingLink] = await ssPagination2(products, page, numberOfPages)

    let [wishlist, cart] = await getModals(req, Wishlist, Cart)

    res.send(searchTemplate({req,  query: req.query.query, products, wishlist, cart, page, iterator, endingLink, numberOfPages, sort: req.session.sortBy}))
})

router.get('/lth/', (req, res) => {
    req.session.sortBy = 'price'

    res.redirect('/search')
})

router.get('/htl/', (req, res) => {
    req.session.sortBy = '-price'

    res.redirect('/search')
})

router.get('/latest/', (req, res) => {
    req.session.sortBy = '-dateCreated'

    res.redirect('/search')
})

router.get('/alpha/', (req, res) => {
    req.session.sortBy = 'product_name'

    res.redirect('/search')
})

module.exports = router;