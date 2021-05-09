var PersonModel = require("./../models/PersonModel");

var Controller = {
    all: function (req, res) {
        PersonModel.find({}).lean().exec(
            function (error, people) {
                if (error) {
                    return res.json(error);
                }
                return res.json(people);
            }
        );
    },
};

module.exports = Controller;