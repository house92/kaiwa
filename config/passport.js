import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
import bCrypt from "bcrypt-nodejs";
import passport from "passport";
import User from "../src/models/user";
import { Strategy } from "passport-local";

passport.use("local-registration", new Strategy(
    {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    (req, email, password, done) => {
        const generateHash = (password) => {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        }

        sequelize.sync().then(() => {
            User.findOne({ where: {email: req.body.email} })
                .then(function(user) {
                    if (user) {
                        return done(null, false, {
                            message: "That e-mail address is already registered"
                        });
                    } else {
                        const userPassword = generateHash(req.body.password);
                        const data = {
                            email: req.body.email,
                            password: userPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName
                        };

                        User.create(data).then(newUser => {
                            if (newUser) {
                                return done(null, newUser);
                            } else {
                                return done(null, false);
                            }
                        });
                    }
                });
        });
    }
));

passport.use("local-login", new Strategy(
    {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    (req, email, password, done) => {
        const isValidPassword = (userpass, password) => {
            return bCrypt.compareSync(password, userpass);

        }

        sequelize.sync().then(() => {
            User.findOne({ where: {email: req.body.email} })
                .then(user => {
                    if (!user) {
                        return done(null, false, {
                            message: "E-mail address not recognised"
                        });
                    }
                    if (!isValidPassword(user.password, req.body.password)) {
                        return done(null, false, {
                            message: "Incorrect password"
                        });
                    }
                    const userinfo = user.get();
                    return done(null, userinfo);
                }).catch(err => {
                    console.log("Error:", err);
                    return done(null, false, {
                        message: "Something went wrong"
                    });
                });
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    sequelize.sync().then(() => {
        User.findById(id).then(user => {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
});
