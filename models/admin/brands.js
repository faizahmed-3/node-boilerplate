const Joi = require('joi');
const mongoose = require('mongoose');

const brandsSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255,
        trim: true
    },
    productIDs: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    topPicks: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    unitsSold: {
        type: Number,
        min: 0,
        default: 0
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    income: {
        type: Number,
        min: 0,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Brand = mongoose.model('Brand', brandsSchema);


function validate(brand) {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(255)
    });
    return schema.validate(brand);
}


exports.Brand = Brand;
exports.validate = validate;

