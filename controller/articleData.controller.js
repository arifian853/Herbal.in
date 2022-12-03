const Articles = require("../models/data.articleModel");

exports.getArticle = async (req, res) => {
    try {
      const response = await Articles.find();
      res.json(response);
  
    } catch (error) {
      console.log(error.message);
    }
};

exports.getArticleById = async (req, res) => {
  try {
    const response = await Articles.findOne({
      id: req.params.id
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};  