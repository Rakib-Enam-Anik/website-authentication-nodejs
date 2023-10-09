const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const userSchema = new mongoose({
    email: {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    createdOn : {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("user", userSchema);