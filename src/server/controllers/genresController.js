import Show from "../../models/show";
import Genre from "../../models/genre";
import ShowGenre from "../../models/showGenre";

exports.getGenres = async (req, res) => {
    res.json(await Genre.findAll({include: [Show]}));
}
