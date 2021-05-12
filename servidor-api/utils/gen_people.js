var mongoose = require('mongoose');
var faker = require('faker');
var PersonModel = require('./../models/PersonModel');

mongoose.connect(
    'mongodb://localhost:27017/authentication',
    { useNewUrlParser: true }
);

async function addPeople(n) {
    try {
        for (var i = 0; i < n; i++) {
            var peopple = new PersonModel();
            peopple.name = faker.name.firstName();
            peopple.country = faker.address.country();
            peopple.email = faker.internet.email();
            peopple.company = faker.company.companyName();
            await peopple.save();
        }
    }
    catch (error) {
        console.error(error);
    }

}

addPeople(15).then(
    () => {
        console.log('Data people created successfully...');
        mongoose.disconnect();
    }
);