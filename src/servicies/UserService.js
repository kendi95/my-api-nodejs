const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("../models/User");

const User = mongoose.model("User");

module.exports = {
    async store(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
        return res.json(user);
    }
};