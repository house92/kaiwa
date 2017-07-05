import Show from "../../models/show";

exports.getShows = async (req, res) => {
    res.json(await Show.findAll());
}
