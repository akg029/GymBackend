const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
   
    // Add more fields as needed, e.g., product reviews, ratings, etc.
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
