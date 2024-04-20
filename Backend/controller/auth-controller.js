const { User } = require("../models/user-model");
const bcrypt = require("bcrypt")


// --------------------
// Register user
// --------------------
exports.registerUser = async (req, res) => {
    try {
        //Check User already register or not
        const oldUser = await User.findOne({ username: req.body.username })

        if (oldUser) {

            res.status(400).json({ "msg": "User already exists" })

        } else {

            //hash the password
            const hash_password = await bcrypt.hash(req.body.password, 10)

            // Create new User

            const user = new User({ ...req.body, password: hash_password })
            const doc = await user.save()

            res.status(201).json({ msg: "Register successful!!", token: await user.generateToken() })
        }
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}


// --------------------
// Login user
// --------------------
exports.loginUser = async (req, res) => {
    try {
        //find User 
        const user = await User.findOne({ username: req.body.username })

        //Check for username 
        if (!user) {
            return res.status(400).json({ "msg": "Invalid Username Or Password" })
        }

        //compare password with hash
        const password = await bcrypt.compare(req.body.password, user.password)

        //Check for password 
        if (!password) {
            return res.status(400).json({ "msg": "Invalid Username Or Password" })
        } else {

            res.status(200).json({
                msg: "User Login Successfully", token: await user.generateToken()
            })
        }

    } catch (error) {
        res.status(500)
        console.log(error);
    }

}