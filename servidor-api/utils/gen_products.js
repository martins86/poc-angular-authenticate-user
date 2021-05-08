var mongoose = require("mongoose");
var faker = require("faker");
var ProductModel = require("./../models/ProductModel");

mongoose.connect(
    'mongodb://localhost:27017/authentication',
    { useNewUrlParser: true }
);

async function addProducts(n) {
    try {
        for(var i=0; i<n; i++) {
            var product = new ProductModel();
            product.name = faker.commerce.productName();
            product.department = faker.commerce.department();
            product.price = faker.commerce.price();
            await product.save();
        }
    }
    catch (error) {
        console.error(error);
    }
    
}

addProducts(100).then(
    () => { 
        console.log("Data products created successfully...");
        mongoose.disconnect();
    }
);