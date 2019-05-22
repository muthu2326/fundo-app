const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campaignScehma = new Schema({
    userId: {},
    categoryId: {},
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    briefStory: {
        type: String,
        required: true
    },
    imageUrl: [{}],
    video: {},
    documentFiles: {},
    targetAmount: {
        type: Number,
        required: true
    },
    recievedAmount: {},
    startDate: {},
    endDate: {},
    donations: [{}],
    comments: {},
    updates: [{
        type: Schema.Types.ObjectId,
        ref: 'CampaignUpdates'
    }],
    status: {},
    benficiary: {},
    accountDetails: {}
})

const Campaign = mongoose.model('Campign', campaignScehma)

module.exports = {
    Campaign
}

