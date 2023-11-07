const {Schema, model} = require('../connection')

const productSchema = new Schema({
    pname : String,
    pprice : String,
    pcategory : String,
    pdescription : String,
});

module.exports = model('product', productSchema);