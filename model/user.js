const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
})
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("pagination", userSchema)