const UserModel = require('./../models/UserModel');
const bcrypt = require('bcryptjs');
const consts = require('./../consts');
const jwt = require('jsonwebtoken');

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
        catch (error) {
            res.status(500).json(
                { message: 'Error while saving the user', error: error}
            );
        }
    },
    
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        
        UserModel.findOne({ email: email }).lean().exec(
            (error, user) => {
                if (error) {
                    return res.status(500).json(
                            { 
                                message: 'Error while saving the user',
                                error: error
                            }
                        );
                }
                
                const auth_error = (password == '' || password == null || !user);
                const validate_passowrd = bcrypt.compareSync(password,nuser.password);
                
                if (!auth_error) {
                    if (validate_passowrd) {
                        let token = jwt.sign(
                                        { id: user.id }, 
                                        consts.keyJWT, 
                                        {expiresIn: consts.expiresJWT}
                                    );
                        delete user.password;
                        return res.json({ ...user, token: token});
                    }
                    return res.status(404).json(
                        { 
                            message: 'Wrong e-mail or password'
                        }
                    );
                }
            }
        );
    }
}