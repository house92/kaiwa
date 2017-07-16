import User from "../../models/user";

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
