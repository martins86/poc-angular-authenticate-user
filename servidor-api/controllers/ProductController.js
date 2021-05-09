var ProductModel = require('./../models/ProductModel');

var Controller = {
    all: function (req, res) {
        ProductModel.find({}).lean().exec(
            function (error, products) {
                if (error) {
                    return res.json(error);
                }
                return res.json(products);
            }
        );
    },
};

module.exports = Controller;