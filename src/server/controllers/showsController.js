import Show from "../../models/show";
import Genre from "../../models/genre";
import ShowGenre from "../../models/showGenre";

exports.getShows = async (req, res) => {
    res.json(await Show.findAll({include: [Genre]}));
}

exports.getShow = async (req, res) => {
    console.log(req);
    res.json(await Show.findOne({ where: { id: req.params.id }, include: [Genre]}));
}
