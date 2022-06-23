const { User } = require("../models/user")

async function signUp({ name, email, phone, password }) {
    const user = new User({ name, email, phone, password })
    await user.save();
    console.log("user signed up:", user)
    return { user, token: user.genAuthToken() }
}

async function logIn({ email, password }) {
    console.log(email, password)
    const user = await User.findOne({ email, password })
    return { user, token: user.genAuthToken() }
}

async function getUser(id) {
    const user = await User.findById(id);
    return user
}
module.exports = { signUp, logIn, getUser }