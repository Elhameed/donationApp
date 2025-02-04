const mongoose = require('mongoose')
const { Schema } = mongoose

const donationSchema = new Schema({
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    },
    donor: {type: mongoose.Types.ObjectId, ref: 'donor'},
    verified: {
        type: Boolean, 
        default: false
    }
  
})

const donationModel = mongoose.model('donation', donationSchema)
module.exports = donationModel;