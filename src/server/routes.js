const express = require("express");
const router = express.Router();
const showsController = require("./controllers/showsController");
const genresController = require("./controllers/genresController");
const { catchErrors } = require("./handlers/errorHandlers");

// Show routes
router.get("/api/shows.json", catchErrors(showsController.getShows));
router.get("/api/shows/:id.json", catchErrors(showsController.getShow));

// Genre routes
router.get("/api/genres.json", catchErrors(genresController.getGenres));

module.exports = router;
