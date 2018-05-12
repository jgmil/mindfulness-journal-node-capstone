const User = require('./models/user');
const Achievement = require('./models/achievement');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const moment = require('moment');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

mongoose.Promise = global.Promise;

// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// ---------------USER ENDPOINTS-------------------------------------
// POST -----------------------------------
// creating a new user
app.post('/users/create', (req, res) => {
    //take the input from the payload
    let username = req.body.username;
    let password = req.body.password;
    let firstName = req.body.firstName;
    //exclude spaces from the username and password
    username = username.trim();
    password = password.trim();
    //generate the encryption key (Salt)
    bcrypt.genSalt(10, (err, salt) => {
        //if the encryption key fails...
        if (err) {
            //display an error
            return res.status(500).json({
                message: 'Encryption key failed'
            });
        }
        //using the encryption key above, encrypt the password (hash)
        bcrypt.hash(password, salt, (err, hash) => {
            //if encrypting the password fails...
            if (err) {
                //display an error
                return res.status(500).json({
                    message: 'Password encryption failed'
                });
            }
            //add the new user to the database
            User.create({
                username,
                password: hash,
                firstName,
            }, (err, item) => {
                //if adding to the database fails...
                if (err) {
                    //display an error
                    return res.status(500).json({
                        message: 'Adding user to the database failed'
                    });
                }
                //if the user is created...
                if (item) {
                    //return the created user
                    console.log(`User \`${username}\` created.`);
                    return res.json(item);
                }
            });
        });
    });
});

// signing in a user
app.post('/users/signin', function (req, res) {
    //take the values from the payload
    const user = req.body.username;
    const pw = req.body.password;
    //search in the database for a user with the existing username
    User
        .findOne({
            username: req.body.username
        }, function (err, items) {
            //if the database search failed...
            if (err) {
                //return an error
                return res.status(500).json({
                    message: "Database connection failed."
                });
            }
            //if that user is not in the database...
            if (!items) {
                //return an error
                return res.status(401).json({
                    message: "User not found!"
                });
            } else {
                //if the user is found, validate the password
                items.validatePassword(req.body.password, function (err, isValid) {
                    //if password validation failed...
                    if (err) {
                        //display an error
                        console.log('There was an error validating the password.');
                    }
                    //if the password is not valid...
                    if (!isValid) {
                        //display an error
                        return res.status(401).json({
                            message: "Password not valid."
                        });
                    }
                    //if the username and password are valid return the username
                    else {
                        return res.json(items);
                    }
                });
            };
        });
});


// -------------ACHIEVEMENT ENDPOINTS------------------------------------------------
// POST -----------------------------------------
// creating a new achievement
app.post('/new/create', (req, res) => {
    let achieveWhat = req.body.achieveWhat;
    achieveWhat = achieveWhat.trim();
    let achieveHow = req.body.achieveHow;
    let achieveWhy = req.body.achieveWhy;
    let achieveWhen = req.body.achieveWhen;
    let user = req.body.user;

    Achievement.create({
        user,
        achieveWhat,
        achieveHow,
        achieveWhen,
        achieveWhy
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            console.log(`Achievement \`${achieveWhat}\` added.`);
            return res.json(item);
        }
    });
});

// PUT --------------------------------------
app.put('/achievement/:id', function (req, res) {
    let toUpdate = {};
    let updateableFields = ['achieveWhat', 'achieveHow', 'achieveWhen', 'achieveWhy'];
    updateableFields.forEach(function (field) {
        if (field in req.body) {
            toUpdate[field] = req.body[field];
        }
    });
    Achievement
        .findByIdAndUpdate(req.params.id, {
            $set: toUpdate
        }).exec().then(function (achievement) {
            return res.status(204).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});

// GET ------------------------------------
// accessing all of a user's achievements
app.get('/achievements/:user', function (req, res) {
    Achievement
        .find()
        .sort('achieveWhen')
        .then(function (achievements) {
            let achievementOutput = [];
            achievements.map(function (achievement) {
                if (achievement.user == req.params.user) {
                    achievementOutput.push(achievement);
                }
            });
            res.json({
                achievementOutput
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

// accessing a single achievement by id
app.get('/achievement/:id', function (req, res) {
    Achievement
        .findById(req.params.id).exec().then(function (achievement) {
            return res.json(achievement);
        })
        .catch(function (achievements) {
            console.error(err);
            res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});

// DELETE ----------------------------------------
// deleting an achievement by id
app.delete('/achievement/:id', function (req, res) {
    Achievement.findByIdAndRemove(req.params.id).exec().then(function (achievement) {
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    });
});

// MISC ------------------------------------------
// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;
