const UserModel = require('./../models/UserModel');
const bcrypt = require('bcryptjs');
const consts = require('./../consts');

module.exports = {
    register: async (req, res) => {
        try {
            let userFind = await UserModel.findOne({ email: req.body.email });
            if (!userFind) {
                const newUser = new UserModel(req.body);
                newUser.password = bcrypt.hashSync(
                    req.body.password, 
                    consts.bcryptSalts
                );
                await newUser.save();
                delete newUser.password;
                
                res.status(200).json(newUser);
            } else {
                res.status(403).json(
                    { message: 'Email already registered', error: {}}
                );
            }
        }
        catch(error) {
            res.status(500).json(
                { message: 'Error while saving the user', error: error}
            );
        }
    },
    
    login: (req, res) => {
        
    }
}