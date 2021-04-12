const Joi = require('joi');
const mongoose = require('mongoose');

const specialCategories = new mongoose.Schema({
    specialCategoriesName: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 255,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Specialcategory = mongoose.model('Specialcategory', specialCategories);


function validate(Specialcategory) {
    const schema = Joi.object({
        specialCategoriesName: Joi.string().required().min(3).max(255)
    });
    return schema.validate(Specialcategory);
}


exports.Specialcategory = Specialcategory;
exports.validate = validate;

