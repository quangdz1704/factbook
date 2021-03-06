const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
    creator: {
        type:  Schema.Types.ObjectId,
        ref: "users"
    },
    data: [{
        keyword: {
            type: String,
        },
        createAt: {
            type: Date
        },
    }]
})

module.exports = mongoose.model('search', SearchSchema);