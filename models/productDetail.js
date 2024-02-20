import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productimage: {
        type: String,
        required: true
    },
    descriptions: { // Corrected field name
        type: String,
        required: true
    }
});

const productModel = mongoose.model('products', productSchema);
export default productModel;
