const express = require("express");
const router = express.Router();
const showsController = require("./controllers/showsController");
const { catchErrors } = require("./handlers/errorHandlers");

// Show routes
router.get("/api/shows.json", catchErrors(showsController.getShows));

module.exports = router;
