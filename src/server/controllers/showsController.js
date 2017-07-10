import Show from "../../models/show";
import Genre from "../../models/genre";
import ShowGenre from "../../models/showGenre";

exports.getShows = async (req, res) => {
    res.json(await Show.findAll({include: [Genre]}));
}
