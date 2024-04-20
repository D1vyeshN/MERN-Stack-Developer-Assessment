const jwt = require("jsonwebtoken");
const { User } = require("../models/user-model");
const { Task } = require("../models/task-model");

// --------------------
// Check Authentication
// --------------------
exports.IsAuthentic = async (req, res, next) => {

    //get token
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized,Token Not Provided" })
    }
    //trim token
    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const IsVerify = jwt.verify(jwtToken, process.env.JWT_SECRET)

        const user = await User.findOne({ username: IsVerify.username }).select({ password: 0 })

        //set request user
        req.user = user
        req.user.id = user._id.toString()

        if (user) {
            next()
        }

    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized,Token Invalid" })
    }
}


// --------------------
// Check Authorization
// --------------------
exports.IsAuthorize = async (req, res, next) => {
    const { id } = req.params
    const userId = req.user.id;
    try {

        //compare task user with current user
        const taskUser = await Task.find({ _id: id })
        
        if (userId === taskUser.user) {
            next()
        }else{
            return res.status(401).json({ msg: "Unauthorized Request" })
        }

    } catch (error) {
        return res.status(500).json({ msg: "Server Error" })
    }
}
