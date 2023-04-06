const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.userRegister = (req, res) => {
    let newUser = new User (req.body);

    newUser.save((error, user) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json({ message: `Utilisateur créé : ${user.email}`});
        }
    })
}

exports.loginRegister = (req, res) => {
    //find user
    User.findOne({email : req.body.email}, (error, user) => {
        if (error || user == null) {
            res.status(500);
            console.log(error);
            res.json({ message: "Utilisateur inconnu." });
        }
        else {
            //user found
            if(user.email == req.body.email && user.password == req.body.password) {
                let userData = {
                    id: user._id,
                    emaim: user.email,
                    role: "admin"
                }
                jwt.sign(userData, process.env.JWT_KEY, {expiresIn : "30days"}, (error, token) => {
                    if (error) {
                        res.status(500);
                        console.log(error);
                        res.json({ message: "Impossible de générer le token." });
                    }
                    else {
                        res.status(200);
                        res.json({token})
                    }
                })
            }
            else{
                res.status(401);
                console.log(error);
                res.json({message: "Email ou mot de passe incorrect"})
            }
        }
    })
}