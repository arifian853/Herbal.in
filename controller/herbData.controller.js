const Products = require("../models/data.herbModel");

exports.getProduct = async (req, res) => {
  try {
    const response = await Products.find();
    res.json(response);

  } catch (error) {
    console.log(error.message);
  }
};

exports.getProductById = async (req, res) => {
  
  try {
    const response = await Products.findOne({
      id: req.params.id
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
