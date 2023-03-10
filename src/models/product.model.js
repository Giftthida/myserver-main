const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: Number,
  unit_in_stock: Number,
  reviews:[
    { star:{ type: Number, required: true }, comment: String }
  ],
},{ timestamps: true } );

module.exports = mongoose.model("Product", productSchema);