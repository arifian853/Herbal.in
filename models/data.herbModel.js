const mongoose = require("mongoose");

const herbDataSchema = new mongoose.Schema({
  product_name: { 
    type: String
  },
  product_price: { 
    type: Number
  },
  product_desc: { 
    type: String 
  },
  product_img: { 
    type: String 
  },
  product_ctg: { 
    type: String 
  },
  id: { 
    type: Number 
  },
});

module.exports = mongoose.model('Products', herbDataSchema);
