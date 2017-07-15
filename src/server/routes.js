import express from "express";
const router = express.Router();
import showsController from "./controllers/showsController";
import genresController from "./controllers/genresController";
import authController from "./controllers/authController";
import { catchErrors } from "./handlers/errorHandlers";
import passport from "passport";

// Show routes
router.get("/shows.json", catchErrors(showsController.getShows));
router.get("/shows/:id.json", catchErrors(showsController.getShow));

// Genre routes
router.get("/genres.json", catchErrors(genresController.getGenres));

// User routes
router.get("/users/logout", authController.logout);

router.post("/users/registration",
    authController.confirmPasswordMatch,
    passport.authenticate("local-registration", {
        successRedirect: "back",
        failureFlash: true
    }
));
router.post("/users/login", passport.authenticate("local-login", {
    successRedirect: "back",
    failureFlash: true
}));

module.exports = router;
