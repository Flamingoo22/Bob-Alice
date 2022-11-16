const User = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


module.exports = {

    //REGISTER
    register: (req, res) => {

        User.create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY);
                
                res
                    .cookie("usertoken", userToken, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            });
},
    
    //LOGIN
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if (!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },

    //LOGOUT
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },

    //READ ALL
    findAll: (req, res) => {
        User.find()
            .then(allUsers => {
                res.json(allUsers)
            })
            .catch(err => res.json(err))
    },

    //CREATE
    create: (req, res) => {
        console.log(req.body)
        User.create(req.body)
            .then(newUser => {
                console.log("SERVER SUCCESS")
                res.json(newUser)
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    //READ ONE
    findOne: (req, res) => {
        User.findById(req.params.id)
            .then(oneUser => res.json(oneUser))
            .catch(err => res.json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body", req.body)
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedUser => res.json(updatedUser))
            .catch(err => res.status(400).json(err))
    },

    //DELETE
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(result))
    }

}
